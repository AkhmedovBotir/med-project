import React from 'react'
import { Card, CardSpecialist, FAQ, Footer, Hero, HeroCompetition, HeroSearch, HeroTop, HomeProf, HomeServices, Navbar } from '../components'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HomeProf />
        <HeroSearch />
        <CardSpecialist />
        <HomeServices />
        <HeroCompetition />
        <HeroTop />
        <FAQ />
        <Footer />
    </div>
  )
}
