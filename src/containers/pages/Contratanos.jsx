import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Contratanos(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Contratanos
                <Footer/>
            </div>
            
        </Layout>
    )
};

export default Contratanos