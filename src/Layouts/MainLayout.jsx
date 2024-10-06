import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout({ children }) {
  return (
        <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90vW' }}>
        <Header>
          <Nav />
        </Header>
        {children}
        <Footer />
      </div>
    
  )
}

export default MainLayout
