import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar , faArrowLeftLong , faClock, faChevronLeft} from "@fortawesome/free-solid-svg-icons"
export default function Article({type , tagIsHidden , data}){
    const {id , title , author , readTime , date , image , excerpt , slug} = data
    return (
        <a href={"/photography/articles/" + slug}>
            <div className="grid-cols-2 grid group hover:border-1 border-1 border-gray-800 hover:border-orange-600 rounded-2xl transition-all duration-200" id={id}>
                <div className={ type == "horizontal" ? "col-span-2 md:col-span-1 relative overflow-hidden max-h-[15rem] md:max-h-[25rem] rounded-s-2xl" : "col-span-2 relative overflow-hidden rounded-t-2xl"}>
                    <img src={image} alt="something something" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"/>
                    <div className= {tagIsHidden == false ? "absolute right-5 top-5 bg-linear-to-l from-orange-600 to-orange-300 rounded-xl px-4 flex items-center" : "hidden"}>
                        <FontAwesomeIcon icon={faStar} className="me-2 text-white fa-sm"/>
                        <span className="text-white font-bold">مميز</span>
                    </div>
                </div>
                <div className={ type == "horizontal" ? "col-span-2 md:col-span-1 bg-olive-950 rounded-2xl" : "bg-olive-950 rounded-b-2xl col-span-2 " }>
                    <div className="py-6 flex flex-col items-start justify-between px-6 h-full">
                        <div className="flex flex-col items-start justify-start pb-6">
                            <div className="py-2 flex items-center justify-center">
                                <span className={type == "horizontal" ? "bg-[#f973161a] border-1 border-orange-600 text-orange-400  rounded-2xl px-2 mx-2" : "hidden"}>إضاءة</span>
                                <span className="text-gray-600 mx-2"><FontAwesomeIcon icon={faClock} className="me-2" />{readTime}</span>
                                <span class="w-1 h-1 bg-neutral-600 inline-block  rounded-full"></span>
                                <span className="text-gray-600 mx-2">{date}</span>
                            </div>
                            <h4 className="text-white group-hover:text-orange-400 text-2xl my-4 font-bold transition-all duration-200">{title}</h4>
                            <p className="text-gray-600 text-md font-[400]">{excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-center ">
                                <div className="relative me-4">
                                    <img src={author.avatar} alt="" className="size-[2.5rem] rounded-full"/>
                                    <div className="bg-orange-300 border-1 border-black border-solid rounded-full absolute bottom-0 left-0"></div>
                                </div>
                                <div>
                                    <span className="text-bold text-sm text-white block">{author.name}</span>
                                    <span className="text-xs text-gray-600 block">{author.role}</span>
                                </div>

                            </div>
                            <div>
                                <span className={type == "horizontal" ? "text-lg text-orange-400 flex items-center justify-center hidden md:block " : "hidden"}>اقرأ المقال
                                    <FontAwesomeIcon icon={ faArrowLeftLong } className="text-orange-400 transiton-all duration-150 md:group-hover:-translate-x-2 " />
                                </span>
                                <span className={type == "horizontal" ? "text-orange-600 bg-[#f973161a] border-1 border-orange-600 border-solid md:hidden block rounded-full size-8 flex items-center justify-center group-hover:bg-orange-400 group-hover:text-white transition-all duration-300" : "text-orange-600 bg-[#f973161a] border-1 border-orange-600 border-solid block rounded-full size-8 flex items-center justify-center group-hover:bg-orange-400 group-hover:text-white transition-all duration-300"}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}