'use client'
import Dashboard from '../components/Dashboard'
import { useEffect, useState } from "react"


export default function Home() {
  const [screenDimensions, setScreenDimensions] = useState<[number, number]>([0, 0])

  useEffect(() => {
    // Adds a resize event listener to update the screen dimensions
    window.addEventListener('resize', updateScreenDimensions)
    // Updates the screen dimensions, which are applied to the style of the parent div.
    // The <div style={backgroundStyle}> element gets re-rendered when the screen dimensions change because the state is being updated.
    function updateScreenDimensions() {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      setScreenDimensions([screenWidth, screenHeight])
    } updateScreenDimensions()
  }, [])


  const backgroundStyle = {
    width: screenDimensions[0] + 'px',
    height: screenDimensions[1] + 'px',
    backgroundColor: "#111420",
    margin: '-8px',

  }


  return (
    <div style={backgroundStyle}>
      <Dashboard></Dashboard>
    </div>)
}