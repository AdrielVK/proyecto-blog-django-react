import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Servicios
                <Footer/>
            </div>
            
        </Layout>
    )
};

export default Home