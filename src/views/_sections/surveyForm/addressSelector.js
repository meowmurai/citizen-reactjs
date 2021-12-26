import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { locationActions } from '../../../_actions'
import { Row, Selector, Input } from '../../../_components'

export const AddressSelector = ({onChange}) => {
    const [addressForm, setAddressForm] = useState({
        city: '',
        district: '',
        ward: '',
        civil_group: '',
        home_address: ''
    })
    const [citys, setCitys] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [civils, setCivils] = useState([])
    const dispatch = useDispatch()

    /**run at first time component mounted, fetch all city into citys state */
    useEffect(()=>{
        dispatch(locationActions.getLocation("0", (data) => setCitys(data)))
    }, [])
    const formUpdate = (e) => {
        setAddressForm( prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        onChange(addressForm)
    }
    const cityChange = (e) => {
        formUpdate(e)
        dispatch(locationActions.getLocation(e.target.value, (data) => setDistricts(data)))
    }
    const districChange = (e) => {
        formUpdate(e)
        dispatch(locationActions.getLocation(e.target.value, (data) => setWards(data)))
    }
    const wardChange = (e) => {
        formUpdate(e)
        dispatch(locationActions.getLocation(e.target.value, (data) => setCivils(data)))
    }
    const civilChange = (e) => {
        formUpdate(e)
    }
    return (
        <>
            <Row><Selector 
                        name='city'
                        prev="abc phuc" options={citys} onChange={cityChange} 
                        placeholder='City'/>
            </Row>
            <Row><Selector 
                        name='district' 
                        options={districts} onChange={districChange} 
                        placeholder='District'/>
            </Row>
            <Row><Selector 
                        name='ward' 
                        options={wards} onChange={wardChange} 
                        placeholder='Ward'/>
            </Row>
            <Row><Selector 
                        name='civil_group' 
                        options={civils} onChange={civilChange} 
                        placeholder='Civil group'/>
            </Row>
            <Row><Input label='Home address' name='home_address' onChange={formUpdate} type='text'/></Row>
        </>
    )
}