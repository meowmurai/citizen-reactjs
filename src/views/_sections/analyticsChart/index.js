import React from "react";
import 'leaflet/dist/leaflet.css';
import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, CircleMarker } from "react-leaflet";
import { HorizontalBarChart, PieChart } from "../../../_components/charts";
import { analyticsAction } from "../../../_actions/analytics.actions";

import { IconButton } from '../../../_components'
import L, { marker } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export function AgeChart() {
    const chartData = {
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const codes = ["01", "02", "03"];

    const [dataRaw, setDataRaw] = useState([]);
    const [ageData, setAgeData] = useState(chartData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(analyticsAction.getAgeDistAction(codes, (messages) => {
            setDataRaw(messages)
        }))
    }, []);

    useEffect(() => {
        setAgeData(postprocessAgeData(dataRaw))
    }, [dataRaw]);

    const title = "Age chart";
    return <HorizontalBarChart chartData={ageData} titleText={title} />;
}

function postprocessAgeData(dataRaw) {
    const ageBins = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    const data = dataRaw ? dataRaw : [];
    const output = { "Nam": [], "Nữ": [] };
    let chartLabels = []
    let isActivated = false;

    for (let elem of data) {
        for (let idx = 1; idx < ageBins.length; idx++) {
            isActivated = false
            let binName = `${ageBins[idx - 1]} - ${ageBins[idx]}`
            let key = Object.keys(elem)[0]
            if (key === "Nam") chartLabels = [...chartLabels, binName]
            for (let binRange of elem[key]) {
                if (isInArray(binName, Object.keys(binRange))) {
                    output[key] = [...output[key], Object.values(binRange)[0]]
                    isActivated = true;
                }
            }
            if (!isActivated) output[key] = [...output[key], 0];
        }
    }

    return {
        labels: chartLabels.reverse(),
        datasets: [
            {
                label: 'Nam',
                data: output["Nam"].reverse(),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Nữ',
                data: output["Nữ"].reverse().map((val) => -val),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }
}

export function JobChart() {
    const dispatch = useDispatch();
    const [jobData, setJobData] = useState({
        labels: [],
        datasets: [
            {
                label: "Job percentage",
                backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850",
                ],
                data: [],
            },
        ],
    }
    );
    const [jobShow, setJobShow] = useState([]);
    const [dataRaw, setDataRaw] = useState();
    const [filter, setFilter] = useState({
        job: [],
        code: [],
    });

    const codes = ["01", "02", "03"];

    useEffect(() => {
        dispatch(analyticsAction.getOccupationAction(codes, (messages) => {
            setDataRaw(messages);
        }))
    }, []);

    useEffect(() => {
        setJobData(postProcessOccData(filter, dataRaw, jobShow));
    }, [dataRaw]);

    useEffect(() => {
        if (dataRaw) setJobData(postProcessOccData(filter, dataRaw, jobShow));

    }, [filter]);

    const title = "Testing";
    return <PieChart chartData={jobData} titleText={title} />;
}

function postProcessOccData(filter, dataRaw, jobShow) {
    const limit = 5;
    const jobFilter = filter?.job;
    const codeFilter = filter?.code;
    let data = dataRaw ? dataRaw.data : [];
    let newData = {};
    for (let i = 0; i < data.length; i++) {
        if (codeFilter.length && !(isInArray(data[i]["code"], codeFilter))) continue;
        for (let jobInfo of data[i]["jobs"]) {
            if (jobFilter.length && !(isInArray(jobInfo["job"], jobFilter))) continue;
            if (jobInfo["job"] === "string") continue; // hardcode fix error
            if (jobShow.length && !(isInArray(jobInfo["job"], jobShow))) continue;
            if (jobInfo["job"] in newData) {
                newData[jobInfo["job"]] += jobInfo["count"];
            } else {
                newData[jobInfo["job"]] = jobInfo["count"];
            }
        }
    }

    // set chart value
    const defaultChart = {
        labels: [],
        datasets: [
            {
                label: "Job percentage",
                backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850",
                ],
                data: [],
            },
        ],
    }

    defaultChart.labels = Object.keys(newData).map((key) => key).slice(0, limit);
    defaultChart.datasets[0].data = Object.keys(newData).map((key) => newData[key]).slice(0, limit);

    return defaultChart;
}

function isInArray(element, array) {
    return array.some(item => element === item)
}

// set marker image
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker() {
    const codes = ["01", "02"]
    const redOptions = { color: 'red' }
    const [isClicked, setClick] = useState(false)
    const [locCount, setLocCount] = useState([])
    const [markers, setMarker] = useState([])
    const map = useMapEvents({})
    const dispatch = useDispatch();
    

    const setDefaultMarker = (messages) => {
        const data = messages.data
        setMarker(messages.data)
    }
    const setCountInLoc = (messages) => {
        setLocCount(messages.data)
    }

    useEffect(() => {
        dispatch(analyticsAction.getCoordinateChildsAction(setDefaultMarker))
        dispatch(analyticsAction.getCountOfSurveyAction(codes, setCountInLoc))
    }, []);
    
    useEffect(() => {
        setMarker([
            {
              "name": "Q.Hoàn Kiếm",
              "code": "0101",
              "lat": "21.030653",
              "lng": "105.847130"
            },
            {
              "name": "Q.Đống Đa",
              "code": "0102",
              "lat": "21.027256",
              "lng": "105.832703"
            },
            {
              "name": "Q.Hoàng Mai",
              "code": "0105",
              "lat": "21.797548",
              "lng": "104.112511"
            },
            {
              "name": "Q.Thanh Xuân",
              "code": "0106",
              "lat": "20.993776",
              "lng": "105.811417"
            }
          ])
        setLocCount([
            {
              "_id": "0102",
              "count": 315
            },
            {
              "_id": "0105",
              "count": 210
            },
            {
              "_id": "0101",
              "count": 271
            },
            {
              "_id": "0106",
              "count": 165
            }
          ])
    }, [isClicked]);

    return (
        <> {
            markers.length && markers.map((marker, index) => {
                return (
                    <Marker eventHandlers={
                        {
                            click: () => {
                                map.setView(
                                    [
                                        marker?.lat,
                                        marker?.lng
                                    ],
                                    12
                                );
                                setClick(true)
                            }
                        }
                    }
                        key={index}
                        position={{
                            lat: marker?.lat,
                            lng: marker?.lng
                        }}>
                        <Popup >
                            {marker?.name}
                        </Popup>
                    </Marker>
                )
            }
            )}
            {
                locCount.length && markers.length && locCount.map((counter, index) => {
                    return (
                        <CircleMarker
                            center={[markers ? markers[index]?.lat : 0, markers ? markers[index]?.lng : 0]}
                            pathOptions={redOptions}
                            radius={counter._id.length === 2 ? counter.count / 400: counter.count / 5}>
                            <Popup>Popup in CircleMarker</Popup>
                        </CircleMarker>
                    )
                }
                )
            }
        </>
    )
}

function DisplayPosition({ map }) {
    const [position, setPosition] = useState(map.getCenter())

    const onClick = useCallback(() => {
        map.setView([15.9030623, 105.8066925], 7)
    }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])

    return (
        <p>
            <h2>latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}</h2>
            <IconButton
                onClick={onClick}>
                <i class="fas fa-undo-alt"></i>
            </IconButton>
        </p>
    )
}

// function getCircleMarker() {

//             }

export function GeoMap() {
    const [map, setMap] = useState(null)

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={[15.9030623, 105.8066925]}
                zoom={7}
                scrollWheelZoom={false}
                whenCreated={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        ),
        [],
    )

    return (
        <div>
            {map ? <DisplayPosition map={map} /> : null}
            {displayMap}
        </div>
    )
}
