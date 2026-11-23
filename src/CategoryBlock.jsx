import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function CategoryBlock({symbol , title , desc , idx}){
    return (
        <a href={`/photography/articles?category=${idx}`}>
        <div className="rounded-xl relative border-1 border-orange-600 bg-mist-950 mx-4 my-2 p-4 flex flex-row items-center hover:-translate-y-1 justify-between group transition-all duration-300">
            <div className="w-full absolute top-0 right-0 bg-linear-to-br from-orange-700 to-orange-300 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white h-full z-1 rounded-xl bg-cover"> </div>
            <div className="flex flex-col items-start justify-center z-10">
                <div className="rounded-xl bg-[#f973161a] border-1 border-orange border-solid p-4 my-2">
                    <FontAwesomeIcon icon={symbol} className="text-orange-400 group-hover:text-white transition-all duration-300 fa-lg"/>
                </div>
                <span className="text-xl text-white font-bold my-2">{title}</span>
                <span className="text-sm text-gray-400 font-bold">{desc}</span>
            </div>
            <span className="opacity-0 z-10 group-hover:opacity-100 bg-gray-900 flex items-center justify-center transition-all duration-300 ms-4 rounded-full size-8"><FontAwesomeIcon className="text-white " icon={faChevronLeft}/></span>
        </div>  
        </a>
    )
}