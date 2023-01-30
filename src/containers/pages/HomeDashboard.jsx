
import CaseList from "components/dashboard/CaseList"
import LayoutDashboard from "hocs/layouts/LayoutDashboard"
import { connect } from "react-redux"

function HomeDashboard({
    cases,
    user,
}){
    return (
        <LayoutDashboard>
            
            <div className="pt-28">
                <div className="mx-auto mx-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">

                        <CaseList cases={cases&&cases}></CaseList>
                    </div>
                </div>
            </div>
        </LayoutDashboard>
    )
}

const mapStateToProps = state =>({
    cases: state.cases.case,
    user: state.auth.user
})

export default connect(mapStateToProps,{

})(HomeDashboard)