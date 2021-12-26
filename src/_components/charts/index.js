import styled from 'styled-components'
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    ArcElement
  } from 'chart.js';
import { Doughnut, Bar, Line} from "react-chartjs-2";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
    Tooltip
);

const ChartArea = styled.div`
    background-color: ${props => props.theme.palete.secondary.lighter};
    flex:0 0 auto;
    padding: 25px;
`

export const BarChart = ({ chartData, titleText }) => (
    <ChartArea>
        <Bar
            data= {chartData}
            options={
                    {
                        plugins: {
                            legend: {
                              display: false,
                              position: 'top',
                            },
                            title: {
                              display: true,
                              text: 'Chart.js Line Chart',
                            },
                        },
                        responsive: true,
                        aspectRatio: 1
                        // maintainAspectRatio: false,
                    }
            }
        />
    </ChartArea>
)

export const HorizontalBarChart = ({ chartData, titleText }) => (
  <ChartArea>
      <Bar
          data= {chartData}
          options={
            {
              indexAxis: 'y',
              elements: {
                bar: {
                  borderWidth: 2,
                },
              },
              responsive: true,
              aspectRatio: 2,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: { titleText },
                },
                tooltip: {
                  callbacks: {
                    label: (ttItem) => (Math.abs(ttItem.parsed.x)) // Inverse negatives to positive numbers
                  }
                }
              },
              scales: {
                xAxes: 
                  {
                    stacked: false,
                    ticks: {
                      beginAtZero: true,
                      callback: (v) => { return v < 0 ? -v: v }
                    },
                  },
                
                yAxes: 
                  {
                    stacked: true,
                    ticks: {
                      beginAtZero: true,
                    },
                    position: "left",
                  }
                ,
              },
            }
          }
      />
  </ChartArea>
)

export const PieChart = ({ chartData, titleText }) => (
    <ChartArea>
        <Doughnut
            data={chartData}
            option={
                    {
                        plugins: {
                            legend: {
                              display: false,
                              position: 'top',
                            },
                            title: {
                              display: true,
                              text: 'Chart.js Line Chart',
                            },
                        }, 
                        responsive: true,
                        aspectRatio: 1
                    }
                }
        />
    </ChartArea>
)


  
export function Test() {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [247, 526, 734, 784, 433, 111, 251],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [247, 526, 734, 784, 433, 111, 251],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return <Line options={options} data={data} />;
}

