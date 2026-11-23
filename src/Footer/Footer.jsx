import { faXTwitter , faGithub , faYoutube , faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Social from "../Social"
import { faChevronLeft, faHeart } from "@fortawesome/free-solid-svg-icons"
const socials = [[faXTwitter , "https://twitter.com/adasah"] 
, [ faGithub , "https://github.com/adasah" ],
[faLinkedin , "https://linkedin.com/company/adasah"],
[faYoutube , "https://youtube.com/@adasah"]
]
export default function Footer(){
    return (
        <>
        <footer className=" py-4 bg-olive-950  border-mist-900 overflow-hidden border-t-1 border-b-1 border-mist-900">
            <div className=" 2xl:w-7xl mx-auto ">
                <div className="grid grid-cols-1  gap-12 md:grid-cols-2 lg:grid-cols-4 px-6 items-start justify-center py-6">
                    <div className="flex flex-col items-start justify-center h-full">
                        <div className="flex items-center justify-center">
                            <div className=" rounded-2xl bg-linear-to-br  hover:scale-110 transition-all duration-300 from-orange-600 to-orange-400 size-12 flex items-center justify-center">
                                <span className="text-white text-xl font-bold text-center">ع</span>
                            </div>
                            <span className="text-xl text-white font-bold ms-4">عدسة</span>
                        </div>
                        <p className="text-gray-600 text-md my-6">
                            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                        </p>
                        <div className="flex items-center justify-between space-x-2">
                            {socials.map((social)=>{return <Social symbol={social[0]} link={social[1]}/> })}
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start h-full" >
                        <h4 className="mb-6 text-white text-xl font-bold text-center footer-title flex items-center justify-center">استكشف</h4>
                        <ul className="space-y-6 w-full">
                            <li className="flex items-center justify-center space-x-4 group">
                                <FontAwesomeIcon icon={faChevronLeft} className="hidden text-orange-400 transition-all duration-300 fa-sm group-hover:-translate-x-4 group-hover:block opacity-0 group-hover:opacity-100"/>
                                <a className="text-gray-600 text-sm group-hover:text-orange-400 transition-all duration-300 w-full block group-hover:-translate-x-4">الرئيسية</a>
                            </li>
                            <li className="flex items-center justify-center space-x-4 group">
                                <FontAwesomeIcon icon={faChevronLeft} className="hidden text-orange-400 transition-all duration-300 fa-sm group-hover:-translate-x-4 group-hover:block opacity-0 group-hover:opacity-100"/>
                                <a className="text-gray-600 text-sm group-hover:text-orange-400 transition-all duration-300 w-full block group-hover:-translate-x-4">المدونة</a>
                            </li>
                            <li className="flex items-center justify-center space-x-4 group">
                                <FontAwesomeIcon icon={faChevronLeft} className="hidden text-orange-400 transition-all duration-300 fa-sm group-hover:-translate-x-4 group-hover:block opacity-0 group-hover:opacity-100"/>
                                <a className="text-gray-600 text-sm group-hover:text-orange-400 transition-all duration-300 w-full block group-hover:-translate-x-4">من نحن</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start h-full">
                        <h4 className="mb-6 text-white text-xl font-bold text-center footer-title flex items-center justify-center">التصنيفات</h4>
                        <ul className="space-y-6 w-full">
                            <li className="flex items-center justify-center space-x-4 group">
                                <FontAwesomeIcon icon={faChevronLeft} className="hidden text-orange-400 transition-all duration-300 fa-sm group-hover:-translate-x-4 group-hover:block opacity-0 group-hover:opacity-100"/>
                                <a className="text-gray-600 text-sm group-hover:text-orange-400 transition-all duration-300 w-full block group-hover:-translate-x-4">إضاءة</a>
                            </li>
                            <li className="flex items-center justify-center space-x-4 group">
                                <FontAwesomeIcon icon={faChevronLeft} className="hidden text-orange-400 transition-all duration-300 fa-sm group-hover:-translate-x-4 group-hover:block opacity-0 group-hover:opacity-100"/>
                                <a className="text-gray-600 text-sm group-hover:text-orange-400 transition-all duration-300 w-full block group-hover:-translate-x-4">بورتريه</a>
                            </li>
                            <li className="flex items-center justify-center space-x-4 group">
                                <FontAwesomeIcon icon={faChevronLeft} className="hidden text-orange-400 transition-all duration-300 fa-sm group-hover:-translate-x-4 group-hover:block opacity-0 group-hover:opacity-100"/>
                                <a className="text-gray-600 text-sm group-hover:text-orange-400 transition-all duration-300 w-full block group-hover:-translate-x-4"> مناظر طبيعية</a>
                            </li>
                            <li className="flex items-center justify-center space-x-4 group">
                                <FontAwesomeIcon icon={faChevronLeft} className="hidden text-orange-400 transition-all duration-300 fa-sm group-hover:-translate-x-4 group-hover:block opacity-0 group-hover:opacity-100"/>
                                <a className="text-gray-600 text-sm group-hover:text-orange-400 transition-all duration-300 w-full block group-hover:-translate-x-4"> تقنيات</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start h-full">
                        <h4 className="mb-6 text-white text-xl font-bold text-center footer-title flex items-center justify-center">ابقى على اطلاع</h4>
                        <p className="text-gray-600 text-md">
                           اشترك للحصول على أحدث المقالات والتحديثات
                        </p>
                        <div className="flex flex-col my-4 items-center justify-center w-full ">
                            <input className="w-full my-2 bg-mist-900 rounded-2xl focus:border-orange-400 py-2.5 text-gray-300 px-4 border-1 border-gray-600 border-solid mx-2" placeholder="أدخل بريدك الإلكتروني"/>
                            <button className="w-full my-2 bg-orange-600 hover:-translate-y-1  rounded-2xl  py-2.5 text-white px-2.5 border-1 border-gray-600 border-solid mx-2 font-bold hover:to-orange-600 transition-all duration-300">اشترك الآن</button>
                        </div>
                    </div>
                </div>  
            </div>
        </footer>
        <footer className="overflow-hidden bg-olive-950 py-6">
            <div className=" 2xl:w-7xl mx-auto ">
                <div className="flex items-center justify-between px-6">
                    <div className="flex items-center justify-center">
                        <span className="text-gray-600 font-[400] text-sm mx-1">© 2026 عدسة. صنع بكل </span>
                        <FontAwesomeIcon icon={faHeart} className="fa-md text-orange-400"/>
                        <span className="text-gray-600 font-[400] text-sm mx-1"> جميع الحقوق محفوظة.</span>
                    </div>
                    <div>
                        <a href="/privacy" className="text-gray-600 font-[400] text-sm mx-1 transition-all duration-300 hover:text-orange-600">سياسة الخصوصية</a>
                        <a href="/terms" className="text-gray-600 font-[400] text-sm mx-1 transition-all duration-300 hover:text-orange-600">شروط الخدمة</a>
                    </div>
                </div>          
            </div>
        </footer>
        </>
    )
}