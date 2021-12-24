import React, { useState } from 'react'
import { vi } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { InputContainer, StyledInput } from './elements'

export const InputDate = ({startDate, setStartDate, endDate, setEndDate}) => {
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
          <InputContainer style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row'}}>
                <StyledInput
                    className={'input' + (focus === START_DATE ? ' -focused' : '')}
                    {...startDateInputProps}
                    placeholder='Start date'
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
                />
          </InputContainer>
        </div>
      )}
    </DateRangePicker>
    
  )
}