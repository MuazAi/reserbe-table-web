import React, { useState } from 'react'
import ActionButton from '../Utils/ActionButton'


  const bookingOccasions = [
    'Birthday',
    'Anniversary',
    'Wedding',
    'Other'
  ]

function BookingForm({times,setAvalilableTimes,submitForm}) {
  const [bookingDate,setBookingDate] = useState(new Date())
  const [bookingTime,setBookingTime] = useState('19:00')
  const [bookingGuests,setBookingBuests] = useState(2)
  const [bookingOccasion,setbookingOccasion] = useState('Anniversary')
  function handleDateChange(e){
    setAvalilableTimes({date:e.target.value,type:'chnge date'})
    setBookingDate(e.target.value)
  }

  return (
          <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={(e)=>submitForm({e,bookingDate,bookingTime,bookingGuests,bookingOccasion})}>
            <label htmlFor="res-date" style={{ marginBottom: '10px' }}>Choose date</label>
            <input type="date" id="res-date" onChange={(e)=>handleDateChange(e)} value={bookingDate} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <label htmlFor="res-time" style={{ marginBottom: '10px' }}>Choose time</label>
            <select id="res-time" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
              {(times||[]).map((time) => (
                <option key={time} value={time} onClick={() => setBookingTime(time)} selected={time === bookingTime}>
                  {time}
                </option>
              ))}
            </select>
            <label htmlFor="guests" style={{ marginBottom: '10px' }}>Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={bookingGuests} onChange={(e)=>setBookingBuests(e.target.value)} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <label htmlFor="occasion" style={{ marginBottom: '10px' }}>Occasion</label>
            <select id="occasion" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
              {
                bookingOccasions.map((occasion) => (
                  <option key={occasion} value={occasion} onClick={() => setbookingOccasion(occasion)} selected={occasion === bookingOccasion}>
                    {occasion}
                  </option>
                ))
              }
            </select>
            <input type="submit" value="Make Your reservation" style={{ backgroundColor: 'var(--primary-color-2)' ,color:'var(--primary-color-1)', padding:'1rem',border:'none',borderRadius:'0.5rem',fontSize:'1rem'}} />
            
          </form>
)
}

export default BookingForm
