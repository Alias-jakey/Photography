import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Social({symbol , link}){
    return (
            <a href={link}>
                <div className="border-1 mx-1 border-gray-700 hover:bg-orange-600 hover:border-transparent group  hover:scale-110  rounded-xl size-[2.5rem] transition-all bg-mist-950 duration-300 flex items-center justify-center">
                    <FontAwesomeIcon icon={symbol} className="transiton-all duration-300 group-hover:text-white text-gray-600"/>
                </div>
            </a>
    )
}