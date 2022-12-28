import Footer from "components/navigation/Footer"
import BlogList from "components/navigation/home/BlogList"
import CTA from "components/navigation/home/CTA"
import Features from "components/navigation/home/Features"
import Header from "components/navigation/home/Header"
import Incentive from "components/navigation/home/Incentive"
import UseCases from "components/navigation/home/UseCases"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"


function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentive/>
                <UseCases/>
                <Features/>
                <CTA/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
};

export default Home