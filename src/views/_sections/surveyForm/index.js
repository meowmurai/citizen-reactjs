import { useState, useEffect, useRef } from 'react'
import { DatePicker } from 'react-nice-dates'
import { useDispatch, useSelector } from 'react-redux'
import { locationActions, taskActions } from '../../../_actions'
import {
	Grid, LoadingButton, Button, IconButton, Input, Row, InputDate, Selector, Table
} from '../../../_components'
import { AddressSelector } from './addressSelector'

export default function SurveyForm({show}){
    const [permanentAddress, setPermanentAddress] = useState({})
    const [temporaryAddress, setTemporaryAddress] = useState({})
    const [citys, setCitys] = useState([])
    const [form, setForm] = useState({
        fullname: '',
        identity_number: '',
        dob: '',
        gender: '',
        job: '',
        religion: '',
        edu_level: ''
    })
    const genderOptions = [{name: 'male', code: 'male'}, {name: 'female', code: 'female'}]
    const eduOptions = [{name: 'In college', code: 'college'}, {name: 'guaranteed', code: 'guaranteed'}]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(locationActions.getLocation('0', (data) => setCitys(data)))
        return ()=>{
            setCitys([])
        }
    }, [])

    /**trigger when input's value change and modify form variable according to input name*/
    const handleChange = (e) => {
        setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }))
    }
    /**trigger when input's value change and modify form variable according to input name*/
    const handleDateChange = (date) => {
        let day = ("0" + date.getDate()).slice(-2)
        let month = ("0" + (date.getMonth() + 1)).slice(-2)
        let year = date.getFullYear()
        setForm( prev => ({
            ...prev,
            dob: `${day}/${month}/${year}`
        }))
        
    }
    /**handle submit action */
    const handleSubmit = () => {
        dispatch(taskActions.insertSurvey({
            ...form,
            permanent_address: permanentAddress,
            temporary_address: temporaryAddress
        }))
    }
    return (
    <div style={{display: `${show ? 'unset' : 'none'}`}}>
        <Row><h2 style={{margin: 'auto'}}>Survey</h2></Row>
        <Row style={{flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Grid sm={12} md={8} lg={4}>
                <Row>Information</Row>
                <Row><Input label='Full name' name='fullname' onChange={handleChange} type='text' required/></Row>
                <Row><Input label='Identity number' name='identity_number' onChange={handleChange} type='number' required/></Row>
                <Row><InputDate placeholder='Date of birth' name='dob' onChange={handleDateChange} type='text' required/></Row>
                <Row><Input label='Your current job' name='job' onChange={handleChange} type='text' /></Row>
                <Row>
                    <Selector 
                        name='gender'
                        options={genderOptions} 
                        onChange={handleChange} 
                        placeholder='gender'
                        style={{marginRight: '16px'}}
                    />
                    <Selector 
                        name='hometown'
                        options={citys} 
                        onChange={handleChange} 
                        placeholder='Home town'
                    />
                </Row>
                <Row>
                    <Selector 
                        name='edu_level'
                        options={eduOptions} 
                        onChange={handleChange} 
                        placeholder='Education level'
                    />
                </Row>
                <Row><Input label='Religion' name='religion' onChange={handleChange} type='text'/></Row>
            </Grid>
            <Grid sm={12} md={8} lg={4}>
                <Row>Permanent address</Row>
                <AddressSelector onChange={(address) => setPermanentAddress(address)}/>
            </Grid>
            <Grid sm={12} md={8} lg={4}>
                <Row>Temporary address</Row>
                <AddressSelector onChange={(address) => setTemporaryAddress(address)}/>
            </Grid>
        </Row>
        <Row style={{justifyContent: 'center'}}>
            <Grid container sm={12} md={8} lg={4} justifyContent='center'>
                <LoadingButton variant='contained'
                        onClick={handleSubmit}
                        style={{margin: 'auto'}}>Submit
                </LoadingButton>
            </Grid>
        </Row>
    </div>
    )
}