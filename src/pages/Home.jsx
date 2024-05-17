import React from 'react'
import { Card, CardSpecialist, FAQ, Hero, HeroCompetition, HeroSearch, HeroTop, HomeServices, Navbar } from '../components'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeroSearch />
        <Card />
        <CardSpecialist />
        <HomeServices />
        <HeroCompetition />
        <HeroTop />
        <FAQ />
    </div>
  )
}
