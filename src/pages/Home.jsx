import React from 'react'
import { Card, CardSpecialist, Hero, HeroSearch, HomeServices, Navbar } from '../components'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeroSearch />
        <Card />
        <CardSpecialist />
        <HomeServices />
    </div>
  )
}
