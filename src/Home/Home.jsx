import SectionStart from "../sectionStart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faPenNib , faEnvelope , faCircleInfo  , faNewspaper , faUsers , faFolderOpen  , faAngleLeft, faSun, faPerson, faUser, faMountainSun, faSliders, faLeftLong, faArrowLeftLong } 
from "@fortawesome/free-solid-svg-icons";
import StatBlock from "../statBlock";
import Article from "../Article.jsx"
import CategoryBlock from "../CategoryBlock.jsx";
import Photography from "../assets/photography-logo.png"
import {posts} from "../posts.json"
export const statsInfo = [
        [faNewspaper , "+50" , "مقالة"],
        [faUsers , "+10 ألف" , "قارئ"],
        [faFolderOpen , "4" , "تصنيفات"],
        [faPenNib , "6" , "كاتب"]
    ]
const categoryInfo = [
    [faSun ,"إضاءة" , " مقالة 4"],
    [faUser ,"بورتريه" , " مقالة 1"],
    [faMountainSun ,"مناظر طبيعية" , " مقالة 3"],
    [faSliders ,"تقنيات" , " مقالة 2"],
    [faSun ,"معدات" , " مقالة 3"]

]
export default function Home(){
    return (
        <main>
            <section id="hero-section" className="min-h-[100vh] bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px] overflow-hidden pt-35 bg-olive-950"  >
            <div className="2xl:w-7xl mx-auto xl:px-[20rem]">
                <div className="flex items-center justify-center flex-col text-center">
                    <SectionStart text={"مرحباً بك في عدسة"}/>
                    <h2 className="text-[40px] md:text-[50px] lg:text-[60px]  font-bold text-white">اكتشف <span className="text-orange-600">فن</span></h2>
                    <span className=" text-[40px] md:text-[50px] lg:text-[60px]  font-bold text-white">التصوير الفوتوغرافي</span>
                    <p className="text-[16px] py-2 md:text-[20px] lg:text-[24px] font-[400] text-gray-500">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
                </div>
                <div className="py-8 flex-col md:flex-row flex items-center justify-center ">
                    <a href="/articles">
                    <button className="group items-center justify-center my-2 w-[90%] md:w-fit bg-linear-to-l from-orange-400 to-orange-500 py-3 px-6 text-white rounded-4xl flex items-center mx-4 text-md font-bold transition-all duration-200 hover:-translate-y-1">استكشف المقالات
                        <FontAwesomeIcon  className="ms-2 group-hover:-translate-x-2 transition-all duration-200" icon={faArrowLeft} />
                    </button>
                    </a>
                    <a href="/about">
                    <button className=" group  items-center justify-center w-[90%] md:w-fit  my-2 py-3 px-6 text-white rounded-4xl text-md font-bold border-1 border-gray-500 flex items-center transition-all duration-200 hover:border-orange-600 hover:text-orange-600"><FontAwesomeIcon className="me-2 transition-all duration-200 group-hover:text-orange-600" icon={faCircleInfo} />اعرف المزيد
                    </button>
                    </a>
                </div>
                <div className="p-5 grid grid-cols-2 md:grid-cols-4 items-center justify-center ">
                    {statsInfo.map((statInfo) => {
                        return <StatBlock symbol={statInfo[0]} title={statInfo[1]} desc={statInfo[2]}/>
                    })}
                </div>
            </div>  
            </section>
            <section id="articles-section" className="overflow-hidden py-10 bg-linear-to-r from-black to-orange-950">
                    <div className="2xl:w-7xl mx-auto py-10">
                        <div className="flex px-4 flex-col items-start ">
                            <SectionStart text={" مميز  "}/>
                            <h3 className="text-[30px] md:text-[40px] lg:text-[50px]  font-bold text-white">مقالات مختارة</h3>
                            <div className="flex md:items-center items-start justify-start  flex-col my-2 md:flex-row md:justify-between w-full">
                                <p className="font-[400] text-gray-500 text-[16px] md:text-[18px] lg:text-[20px] py-2">محتوى منتقى لبدء رحلة تعلمك</p>
                                <button className="group items-center justify-center my-2  bg-linear-to-l from-orange-400 to-orange-500 py-3 px-6 text-white rounded-xl flex items-center mx-2 font-bold transition-all duration-200 hover:-translate-y-1">عرض الكل
                                <FontAwesomeIcon icon={faAngleLeft} className="ms-2 group-hover:-translate-x-2 transition-all duration-200" />
                                </button>
                            </div>
                            <div className="flex flex-col py-6 space-y-6 items-center justify-center">
                                <Article type="horizontal" tagIsHidden={false} data={posts[0]}/>
                                <Article type="horizontal" tagIsHidden={false} data={posts[1]}/>
                                <Article type="horizontal" tagIsHidden={false} data={posts[2]}/>
                            </div>
                        </div>
                    </div>
            </section>
            <section id="article-categorys-section" className="overflow-hidden py-10 bg-olive-950">
                <div className="2xl:w-7xl mx-auto py-10">
                        <div className="flex px-4 flex-col items-center justify-center ">
                            <div className="flex px-4 flex-col items-center justify-center ">
                                <SectionStart text={" التصنيفات  "}/>
                                <h2 className="text-[30px] md:text-[40px] lg:text-[50px]  font-bold text-white">استكشف حسب الموضوع </h2>
                                <p className="font-[400] text-gray-500 text-[16px] md:text-[18px] lg:text-[20px] py-2">   اعثر على محتوى مصمم حسب اهتماماتك </p>                                
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 py-2">
                                {categoryInfo.map((cat , idx) => {
                        return <CategoryBlock symbol={cat[0]} title={cat[1]} desc={cat[2]} idx={idx}/>
                    })}
                            </div>
                        </div>
                </div>
            </section>
            <section id="newest-articles-section" className="overflow-hidden py-10 bg-linear-to-l from-black to-orange-950">
                    <div className="2xl:w-7xl mx-auto py-10">
                        <div className="flex items-start flex-col justify-between px-6">
                            <SectionStart text={" الأحدث  "}/>
                            <h3 className="text-[30px] md:text-[40px] lg:text-[50px] mt-2 font-bold text-white"> أحدث المقالات</h3>
                            <div className="flex flex-col justify-between items-start md:items-center md:flex-row w-full">
                                <p className="font-[400] text-gray-500 text-[16px] md:text-[18px] lg:text-[20px] py-2"> محتوى جديد طازج من المطبعة </p>
                                <a className="text-orange-400 text-md font-bold group flex items-center justify-center">عرض جميع المقالات<FontAwesomeIcon icon={faArrowLeftLong} className="text-orange-400 transition-all duration-300 group-hover:-translate-x-1 ms-2"/></a>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                                <div className="m-2">
                                    <Article type={"vetical"} tagIsHidden={true} data={posts[5]}/>
                                </div >
                                 <div className="m-2">
                                    <Article type={"vetical"} tagIsHidden={true} data={posts[9]}/>
                                </div>
                                 <div className="m-2">
                                    <Article type={"vetical"} tagIsHidden={true} data={posts[11]}/>
                                </div>

                            </div>
                        </div>
                    </div>
            </section>
            <section id="contact-us" className="overflow-hidden py-10 bg-olive-950">
                    <div className="2xl:w-7xl mx-auto py-10 lg:px-50 px-10">
                        <div className="flex-col py-16 flex items-center justify-between bg-black border-gray-900 border-1 rounded-2xl px-10">
                            <div className="bg-linear-to-b from-orange-600 to-orange-300 rounded-2xl size-16 flex items-center justify-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white" />
                            </div>
                            <h4 className="text-white font-bold text-[20px] md:text-[30px] lg:text-[40px] text-center my-1">اشترك في <span className="text-orange-400 font-bold text-[20px] md:text-[30px] lg:text-[40px] "> نشرتنا الإخبارية</span></h4>
                            <p className="text-gray-400 font-[400] text-[18px] text-center">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
                            <div className="flex my-4 items-center justify-center w-full md:px-20 ">
                                <input className="w-2/3 bg-mist-900 rounded-lg focus:border-orange-400 py-2.5 text-gray-300 px-4 border-1 border-gray-600 border-solid mx-2" placeholder="أدخل بريدك الإلكتروني"/>
                                <button className="w-1/3 bg-linear-to-l from-orange-600 to-orange-300  rounded-lg  py-2.5 text-white px-2.5 border-1 border-gray-600 border-solid mx-2 font-bold hover:to-orange-600 transition-all duration-300">اشترك الآن</button>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="flex items-center justify-center m-0">
                                    <img className="size-[2rem] rounded-full" src={Photography} alt="workin"/>
                                    <img className="size-[2rem] rounded-full translate-x-3 z-2" src={Photography} alt="workin"/>
                                    <img className="size-[2rem] rounded-full translate-x-6 z-3" src={Photography} alt="workin"/>
                                </div> 
                                <span className="text-gray-600 text-md font-[400]">انضم لـ <span className="text-white font-[400] text-md">+10,000</span> مصور</span>
                                <span className="text-gray-600 text-md font-[400] mx-2">•</span>
                                <span className="text-gray-600 text-md font-[400]">بدون إزعاج</span>
                                <span className="text-gray-600 text-md font-[400] mx-2">•</span>
                                <span className="text-gray-600 text-md font-[400]">إلغاء الاشتراك في أي وقت</span>

                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}