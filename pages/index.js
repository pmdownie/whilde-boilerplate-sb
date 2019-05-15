import React from 'react'
import Hero from '../components/Hero'
import RendezVous from '../components/RendezVous'
import Footer from '../components/Footer'

class Home extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <RendezVous />
                <Footer />
            </>
        )
    }
}

export default Home
