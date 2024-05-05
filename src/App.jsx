import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import News from './components/News/News'
import Menu from './components/Menu/Menu'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

export default function App() {

  return (
    <>
      <Navigation />
      <News />
      <Menu />
      <Contacts />
      <Footer />
    </>
  )
}
