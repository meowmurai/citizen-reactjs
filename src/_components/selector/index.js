import { useState  } from 'react'
import styled from 'styled-components'

import randomID from '../../_helpers/uuid'

export const Selector = ({options=[], width, value, disabled,onClick=()=>{}, onChange, placeholder, name, ...rest}) => {
    const [active, setActive] = useState(false)
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(value)

    const handleClick = (e) =>{
        onClick(e)
        if(disabled) return;
        setActive(preactive => !preactive)
        setShow(preshow => !preshow)
        
    }
    const handleFocusOut = () => {
        setActive(false)
        setShow(false)
    }
    const handleSelect = (selectedValue, e) =>{
        if(selected?.code !== selectedValue.code){
            onChange({
                ...e,
                target: {
                    ...e.target,
                    name: name,
                    value: selectedValue.code
                }
            })
            setSelected(selectedValue)
        }
    }
    return (
        <DropDown 
            className={`${active ? 'active': ''}`}
            tabIndex={0}
            onClick={handleClick}
            onBlur={handleFocusOut}
            width={width}
            {...rest}>

            <Select>
                <span>{selected?.name ? selected.name : placeholder}</span>
                <i className="fa fa-chevron-left"></i>
            </Select>
            <input type="hidden" name="gender"/>
            <DropDownMenu
                className={`${show ? 'show': ''}`}>
                {options.map(option => {
                    return (
                        <li key={randomID()} onClick={(e)=>handleSelect(option, e)}>{option.name}</li>
                    )
                })}
            </DropDownMenu>
        </DropDown>
    )
}
const Select = styled.div`
    cursor: pointer;
    display: block;
    padding: 10px;
    & > span{
        margin-right: 4px;
    }
    & > i {
        font-size: 0.8rem;
        color: #888;
        cursor: pointer;
        transition: all .3s ease-in-out;
        float: right;
        line-height: 20px
    }
`
const DropDown = styled.div`
    min-width: 100px;
    width: ${props => props.width ? props.width : '100%'};
    height: 2.8rem;
    padding: 2px 4px;
    display: inline-block;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 2px rgb(204, 204, 204);
    transition: all .5s ease;
    position: relative;
    font-size: 14px;
    color: #474747;
    height: 100%;
    text-align: left;

    &:hover{
        box-shadow: 0 0 4px rgb(204, 204, 204);
    }
    &:active{
        background-color: #f8f8f8;
        
    }
    &.active, &.active:hover{
        box-shadow: 0 0 4px rgb(204, 204, 204);
        border-radius: 2px 2px 0 0;
        background-color: #f8f8f8;
        outline: 2px solid ${props => props.theme.palete.primary.lighter};
    }
    &.active ${Select} > i {
        transform: rotate(-90deg);
    }
`
const DropDownMenu = styled.ul`
    padding: 0;
    list-style: none;
    position: absolute;
    background-color: #fff;
    width: 100%;
    left: 0;
    margin-top: 1px;
    box-shadow: 0 1px 2px rgb(204, 204, 204);
    border-radius: 0 1px 2px 2px;
    overflow: hidden;
    display: none;
    max-height: 144px;
    overflow-y: auto;
    z-index: 9;
    &.show{
        display: block;
    }
    & > li {
        padding: 10px;
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
    & > li:hover{
        background-color: ${props => props.theme.palete.primary.main};
        color: #fff;
    }
    & > li:active{
        background-color: ${props => props.theme.palete.primary.lighter};
    }
`