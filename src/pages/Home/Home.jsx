import Header from '../../components/Header/Header'
import LatestEvents from '../../components/latest-events/LatestEvents'
import MainContent from '../../components/main-content/MainContent'
import OurStory from '../../components/Our-Story/OurStory'
import Footer from '../../components/footer/Footer.jsx'
import './index.css'

function Home () {
    return (
        <>
            <Header />
            <MainContent />
            <OurStory />
            <LatestEvents />
            <Footer />
        </>
    )
}

export default Home