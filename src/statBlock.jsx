import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function StatBlock({symbol , title , desc}){
    return(
        <div className="border-gray-600 mx-2 my-2 rounded-xl border-1 border-thin flex flex-col bg-olive-950 p-2 hover:scale-105 items-center transition-all duration-200 justify-center">
            <span className="text-orange-600 my-1 fa-2xl "><FontAwesomeIcon icon={symbol} /></span>
            <span className="text-orange-600 my-1 text-2xl font-bold">{title}</span>
            <span className="text-gray-400 my-1 text-md">{desc}</span>
        </div>
    )
}