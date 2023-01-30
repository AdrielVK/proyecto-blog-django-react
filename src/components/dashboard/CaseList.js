import CaseCard from "components/casos/CaseCard";


export default function CaseList({cases, cases_list_page}) {
    return (
        <div className="overflow-hidden px-8 bg-white">
            <ul className="divide-y space-y-8 gap-8 divide-gray-200">
                {cases&&cases.map((cases, index) => (
                    <CaseCard key={index}index={index} data={cases}/>
                ))}
            </ul>
        </div>
    )
}