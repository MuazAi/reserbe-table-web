import React, { useReducer } from 'react'
import MainLayout from '../Layouts/MainLayout'
import Main from '../components/MainComponents/Main'
import BookingForm from '../components/Forms/BookingForm'
import { useNavigate } from 'react-router-dom'
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

function updateTimes(state,change) {
  return fetchAPI(new Date(change.date));
}
function intializeTimes(){
return fetchAPI(new Date());
}
function Reservation() {

  const [availableTimes,setAvailableTimes] = useReducer(updateTimes,intializeTimes())
  function handleSubmit(formData){
    formData.e.preventDefault();
   if(submitAPI(formData)) 
    window.location.href = '/confirmation'
  }
  return (


   <MainLayout>
        <BookingForm times={availableTimes} setAvalilableTimes={setAvailableTimes} submitForm={handleSubmit}/>
   </MainLayout> 
  )
}

export default Reservation

