import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceFrown , faHouse, faNewspaper} from "@fortawesome/free-solid-svg-icons"

export default function ErrorPage(){
    return (<main>
        <section className=" relative overflow-hidden pt-16 pb-6 min-h-[100vh] bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px] overflow-hidden py-35 bg-olive-950">
            <div class="absolute inset-0 opacity-40"><div class="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]"></div><div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]"></div></div>
            <div className="md:w-md text-center mx-auto relative">
                <div className="flex flex-col items-center justify-center border-b-1 border-gray-800/50 py-10">
                    <h1 className="bg-transparent bg-clip-text text-[140px] text-transparent font-black bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500">404</h1>
                    <div className="py-4 relative ">
                        <div className="rounded-md absolute size-[1rem] bg-orange-600 right-0 top-0 animate-bounce rotate-20"></div>
                        <div className="rounded-full absolute size-[1rem] bg-yellow-600 left-0 bottom-0 animate-pulse"></div>
                        <div className="size-[8rem] border-1 border-orange-600/50 bg-orange-700/10 rounded-full text-orange-600 flex items-center justify-center text-[50px]">
                            <FontAwesomeIcon icon={faFaceFrown} /> 
                        </div>
                    </div>
                    <h2 className="text-white font-bold text-3xl">عفواً! الصفحة غير موجودة</h2>
                    <p className="text-gray-300 font-[400] text-lg mt-2">الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>
                    <div className="flex items-center justify-center my-4 flex-wrap space-y-3">
                        <a href="/photography" className=" w-full md:w-fit mx-4 rounded-full bg-orange-600 transition-all duration-300 hover:-translate-y-1 text-white py-3 px-6 font-bold ">
                            <FontAwesomeIcon icon={faHouse} className="me-2" />الذهاب للرئيسية
                        </a>
                        <a href="/photography/articles" className=" w-full md:w-fit hover:text-orange-600 mx-4 rounded-full bg-transparent border-white border-1 hover:border-orange-600 hover:bg-orange-600/10 transition-all duration-300 text-white py-3 px-6 font-bold ">
                            <FontAwesomeIcon icon={faNewspaper} className="me-2" /> تصفح المقالات
                        </a>
                    </div>
                </div>
                <div className="py-4 flex flex-col justify-content items-center text-center">
                    <span className="text-gray-300/50 text-sm " >قد تجد هذه مفيدة:</span>
                    <div>
                        <a href="/photography/articles" className="text-orange-600 hover:text-orange-400 hover:underline text-sm mx-2 ">المدونة</a>
                        <span className="text-gray-300/50 text-xsm">•</span>
                        <a href="/photography/about" className="text-orange-600 hover:text-orange-400 hover:underline text-sm mx-2">من نحن</a>
                        <span className="text-gray-300/50 text-xsm">•</span>
                        <a href="/photography/privacy" className="text-orange-600 hover:text-orange-400 hover:underline text-sm mx-2">الخصوصية</a>
                    </div>
                </div>
            </div>
        </section>
    </main>)
}