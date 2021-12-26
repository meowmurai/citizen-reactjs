import React, { useState } from 'react'
import { vi } from 'date-fns/locale'
import { DatePicker, DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { InputContainer, StyledInput } from './elements'


export const InputDate = ({onChange, containerSX, inputSX}) => {
  const [date, setDate] = useState(null)

  const handleChange = (d) => {
    onChange(d)
    setDate(d)
  }
  return (
    <InputContainer style={{...containerSX}}>
      <DatePicker date={date} onDateChange={handleChange} locale={vi}>
        {({ inputProps, focused }) => (
          <StyledInput
            onChange={onChange}
            className={'input' + (focused ? ' -focused' : '')}
            style={{...inputSX}}
            {...inputProps}
          />
        )}
      </DatePicker>
    </InputContainer>
  )
}
export const InputDateRange = ({containerSX, inputSX, startDate, setStartDate, endDate, setEndDate}) => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={tomorrow}
      minimumLength={1}
      format='dd MMM yyyy'
      locale={vi}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className='date-range'>
          <InputContainer style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row'}, {...containerSX}}>
                <StyledInput
                    className={'input' + (focus === START_DATE ? ' -focused' : '')}
                    {...startDateInputProps}
                    placeholder='Start date'
                    style={{...inputSX}}
                />
            {/* </InputContainer> */}
                <span
                    style={{flex: '1 0 10%', color: '#8f8f8f', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-chevron-right"></i>
                </span>
              {/* <InputContainer> */}
                <StyledInput
                    className={'input' + (focus === END_DATE ? ' -focused' : '')}
                    {...endDateInputProps}
                    placeholder='End date'
                    style={{...inputSX}}
                />
          </InputContainer>
        </div>
      )}
    </DateRangePicker>
    
  )
}