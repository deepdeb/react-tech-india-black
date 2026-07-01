import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import AboutUsIntro from "../sections/about-us/AboutUsIntro"
import AboutUsLeadership from "../sections/about-us/AboutUsLeadership"
import AboutUsMissionStats from "../sections/about-us/AboutUsMissionStats"
import AboutUsGlobal from "../sections/about-us/AboutUsGlobal"
import AboutUsValues from "../sections/about-us/AboutUsValues"
import AboutUsSplitSections from "../sections/about-us/AboutUsSplitSections"

const AboutUs = () => {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <AboutUsIntro />
            <AboutUsLeadership />
            <AboutUsMissionStats />
            <AboutUsSplitSections />
            <AboutUsGlobal />
            <AboutUsValues />
            <Footer />
        </div>
    )
}

export default AboutUs
