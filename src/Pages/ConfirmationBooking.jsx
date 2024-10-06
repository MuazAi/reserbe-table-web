import React from 'react'
import Title from '../components/Utils/Title'
import MainLayout from '../Layouts/MainLayout'

function ConfirmationBooking() {
  return (
    <MainLayout>
     <Title level={1} >Congratulations </Title> 
     <Title level={2} >The booking is successful. </Title> 
    </MainLayout>
  )
}

export default ConfirmationBooking