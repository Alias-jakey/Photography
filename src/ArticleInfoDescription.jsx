import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ArticleInfoDesc({title , desc}){
    if(title.includes("#")){
        title = title.slice(2)
    }
    return (
    <div id={title} className="flex flex-col items-start justify-center">
        <div className="flex items-center justify-start">
            <span className="text-orange-600 p-1 border-1 rounded-lg border-orange-800 bg-black/50">
                <FontAwesomeIcon icon={faCamera} className="text-3xl "/>
            </span>
            <span className="text-white text-xl mx-2 font-bold">{title}</span>
        </div>
        <p className="text-lg text-gray-300 my-6">{desc}</p>
    </div>
    )
}