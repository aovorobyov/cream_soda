import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import News from './components/News/News'
import Menu from './components/Menu/Menu'

export default function App() {

  return (
    <>
      <Navigation />
      <News />
      <Menu />
    </>
  )
}
