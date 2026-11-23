import { faCalendar, faChevronLeft , faClock, faHome, faTags , faList, faEnvelope, faImages , faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter , faGithub , faYoutube , faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ArticleInfo.css"
import Social  from "../Social.jsx"
import ArticleInfoDesc from "../ArticleInfoDescription";
const socials = [[faXTwitter , "https://twitter.com/adasah"] 
, [ faGithub , "https://github.com/adasah" ],
[faLinkedin , "https://linkedin.com/company/adasah"],
[faYoutube , "https://youtube.com/@adasah"]
]
export default function ArticleInfo({post}){
    const {image , category , date , readTime , title , author , excerpt , tags} = post
    
    const content = post.content.split("\n\n")
    return (
        <main>
            <section id="image-section" className="h-[90vh] pt-16 relative overflow-hidden">
                <img id="article-img" className="object-cover w-full h-full" src={image}/>
                <div class="absolute inset-0 bg-gradient-to-t from-black  to-transparent"></div>
                <div className="2xl:w-7xl mx-auto px-12 absolute top-25 right-0">
                    <div className="rounded-full w-fit flex items-center justify-center bg-black/30 backdrop-blur-md p-1 space-x-1">
                        <FontAwesomeIcon icon={faHome} className="fa-sm text-neutral-300 "/>
                        <FontAwesomeIcon icon={faChevronLeft} className="fa-sm text-neutral-300 "/>
                        <a href="/articles" className="text-neutral-300 hover:text-neutral-100 transition-all duration-300 text-sm">
المدونة</a>
                        <FontAwesomeIcon icon={faChevronLeft} className="fa-md text-neutral-300 text-sm "/>
                        <span className="text-neutral-300 text-sm">{category}</span>
                    </div>
                    <div className="pt-20 lg:pr-55 flex flex-col justify-center items-start">
                        <div className="flex items-center justify-start space-x-2">
                            <button className="rounded-2xl p-1 text-md  px-4 transition-all duration-300 bg-orange-500 text-white font-bold hover:bg-orange-600">إضاءة</button>
                            <span className="text-neutral-300 text-sm flex items-center justify-center">
                                <FontAwesomeIcon icon={faCalendar} className="text-neutral-300 fa-sm mx-2"/>
                                {date}
                            </span>
                            <span className="text-neutral-300 text-sm flex items-center justify-center">
                                <FontAwesomeIcon icon={faClock} className="text-neutral-300 fa-sm mx-2"/>
                                {readTime}
                            </span>
                        </div>
                        <h1 className="text-white text-[40px] md:text-[50px] lg:text-[60px] font-bold">{title}</h1>
                        <div className="p-4 my-4 border-gray-800 border-1 flex items-center justify-center bg-neutral-900 rounded-2xl">
                            <img src={author.avatar} className="size-[4rem] rounded-full border-1 border-orange-600 me-4"/>
                            <div>
                                <span className="font-bold text-white text-xl block">{author.name}</span>
                                <span className="text-gray-400 text-md block">{author.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="info-section" className="py-10 overflow-hidden bg-black">
                <div className="2xl:w-7xl mx-auto">
                <div className="flex items-start justify-center border-b-1 border-gray-800/50 py-6">
                    <div className="flex-col flex items-start justify-center w-3/4 pe-8">
                        <div className="bg-linear-to-l rounded-xl from-black/50 to-orange-600/50 w-full border-1 border-orange-800/50 p-6 text-lg text-gray-300">
                           <i> "{excerpt}" </i>
                        </div>
                        <p className="text-lg text-gray-300 my-12">{content[0]}</p>
                        {content.map((contents , idx)=>{
                            if(idx % 2 == 1 && idx != 0){
                                return <ArticleInfoDesc title={content[idx]} desc={content[idx+1]}/>
                            }
                        })}
                        <div className="border-gray-800/50 border-1 rounded-xl p-4 bg-olive-950 flex-col flex items-start justify-center my-4 w-full">
                            <div className="flex items-center justify-start ">
                                <div className="border-1 border-orange-800 bg-black/50 p-3 text-xl text-orange-600 flex items-center justify-center rounded-xl "><FontAwesomeIcon icon={faTags}/></div>
                                <span className="text-lg text-white font-bold ms-4">الوسوم</span>
                            </div>
                            <div className="flex items-center justify-center my-4">
                            {tags.map((tag)=>{
                                return <a className="p-2 hover:text-orange-600 hover:border-orange-600 transition-all duration-300 text-gray-300/80 border-neutral-800/50 border-1 bg-gray-100/10 me-2 rounded-full text-sm">#{tag}</a>
                            })}
                            </div>
                        </div>
                        <div className="border-gray-800/50 border-1 rounded-xl p-4 bg-olive-950 flex items-center justify-between my-4 w-full">
                            <div className="flex items-center justify-start w-1/2">
                                <div className="border-1 border-orange-800 bg-black/50 p-3 text-xl text-orange-600 flex items-center justify-center rounded-xl "><FontAwesomeIcon icon={faTags}/></div>
                                <span className="text-lg text-white font-bold ms-4">
شارك المقال</span>
                            </div>
                            <div  className="flex items-center justify-end w-full">
                                {socials.map((social)=>{
                                    return <Social symbol={social[0]} link={social[1]}/>
                                })}
                            </div>
                        </div>
                        <div className="border-gray-800/50 border-1 rounded-xl p-4 bg-olive-950 flex items-center justify-start my-4 w-full">
                                <img src={author.avatar} alt={author.name} className="border-orange-800/50 border-5 rounded-xl size-[6rem] mx-4"/>
                                <div className="flex-col flex items-start justify-start">
                                    <span className="text-orange-600 text-sm font-bold mb-1">كاتب المقال</span>
                                    <span className="text-white text-lg font-bold">{author.name}</span>
                                    <span className="text-neutral-600 text-sm mb-2">{author.role}</span>
                                    <p className="text-neutral-400 text-sm  ">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                                </div>
                        </div>
                    </div>
                    <div className="w-1/4 sticky top-0 ps-8 h-full">
                        <div className="flex-col flex items-center justify-center border-gray-800/50 border-1 rounded-xl bg-olive-950 px-6 mb-6">
                                <div className="flex items-center justify-start p-4">
                                    <span className="text-orange-600 p-2 py-3 flex items-center justify-center border-1 rounded-lg border-orange-800 bg-black/50"><FontAwesomeIcon icon={faList} /></span>
                                    <span className="text-lg font-bold ms-4 text-white ">محتويات المقال</span>
                                </div>
                                {content.map((content , idx)=>{
                                    if(content.includes("#")){
                                        return (
                                            <a href={`#${content.slice(2)}`} className="transition-all duration-300 group hover:bg-orange-600/10 w-[100%] p-2 flex items-center justify-start mb-6 rounded-xl">
                                            <span className="transition-all duration-300 px-4 py-2 text-sm me-2 text-gray-300 group-hover:text-orange-600 bg-gray-100/5 rounded-xl ms-4" >{Math.round(idx/2)}</span>
                                            <span className="transition-all duration-300 p-2 text-sm me-2 text-gray-300 group-hover:text-orange-600">{content.slice(2)}</span>
                                        </a>
                                        )
                                    }
                                })}
                        </div>
                        <div className="border-gray-800/50 border-1 rounded-xl bg-olive-950 px-6 mb-6">
                            <div className="flex items-stretch justify-center py-4">
                                <div className="bg-black rounded-xl p-2 flex flex-col items-center justify-center  h-full mx-2 w-full">
                                    <FontAwesomeIcon icon={faClock} className="text-orange-600 fa-lg mb-2"/>
                                    <span className="text-white font-bold text-lg text-center">{readTime}</span>
                                    <span className="text-white  text-sm text-center">وقت القراءة</span>
                                </div>
                                <div className="bg-black rounded-xl p-2 flex flex-col items-center text-center justify-center  mx-2 w-full">
                                    <FontAwesomeIcon icon={faCalendar} className="text-orange-600 fa-lg mb-2"/>
                                    <span className="text-white font-bold text-sm text-center">{date}</span>
                                    <span className="text-white  text-sm text-center">تاريخ النشر</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col flex items-center justify-center border-orange-300/50 border-1 rounded-xl p-6 bg-orange-600/10">
                                <span className="text-orange-600 text-2xl size-[4rem] flex items-center justify-center bg-orange-600/10 rounded-xl"><FontAwesomeIcon icon={faEnvelope}/></span>
                                <span className="text-white text-lg font-bold my-1">لا تفوّت جديدنا</span>
                                <span className="text-gray-300 text-md my-1">اشترك للحصول على أحدث المقالات</span>
                                <button className="text-white font-bold w-[90%] py-2 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 my-1"><a href="/articles">تصفح المزيد</a></button>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section id="other-content-section" className="py-4 overflow-hidden bg-black">
                <div className="2xl:w-7xl mx-auto">
                    <div className="flex flex-col items-start justify-center">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-center">
                                <div className="border-1 border-orange-800 bg-black/50 p-3 text-xl text-orange-600 flex items-center justify-center rounded-xl "><FontAwesomeIcon icon={faImages}/></div>
                                <div className="flex flex-col items-start justify-start">
                                    <span className="text-2xl text-white font-bold ms-4">
                                    مقالات قد تعجبك</span>
                                    <span className="text-sm text-gray-300  ms-4">استكشف المزيد من المحتوى المميز</span>
                                </div>
                            </div>
                                <a href="/articles" className="group transition-all flex items-center justify-center duration-300 text-orange-600 hover:text-orange-400">عرض الكل
                                    <FontAwesomeIcon icon={faArrowLeftLong} className="ms-2 group-hover:-translate-x-2 transition-all duration-300" />
                                </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}