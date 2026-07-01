import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"
import CTA from "../sections/home/CTA"
import FAQ from "../sections/home/FAQ"
import Hero from "../sections/home/Hero"
import WhatWeDo from "../sections/home/WhatWeDo"

const Home = () => {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <Hero />
            <WhatWeDo />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    )
}

export default Home
