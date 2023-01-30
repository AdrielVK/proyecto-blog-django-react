import { connect } from "react-redux";
import {motion} from 'framer-motion'
import { useEffect } from "react"
import AOS from 'aos'
function Layout({children}){
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
      },[])
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {children}
        </motion.div>
    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps,{

})(Layout)