import SectionStart from "../sectionStart"
import StatBlock from "../statBlock"
import {statsInfo} from "../Home/Home.jsx"
import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faBullseye, faEnvelope, faHandshake, faRotate } from "@fortawesome/free-solid-svg-icons"
import Profile from "../profile.jsx"
import {posts} from "../posts.json"

const valuesInfo = [
        {symbol :faBullseye , title :"الجودة أولاً" ,desc : "محتوى مدروس ومكتوب بخبرة"},
        {symbol :faBolt , title :"تركيز عملي" ,desc : "أمثلة واقعية يمكنك تطبيقها اليوم"},
        {symbol :faHandshake ,title : "المجتمع" ,desc : "تعلم مع آلاف المصورين"},
        {symbol :faRotate , title :"دائماً محدث" ,desc : "أحدث الاتجاهات وأفضل الممارسات"}
    ]

export default function About(){
    return(
        <main>
            <section id="hero-section" className="min-h-[100vh] bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px] overflow-hidden pt-35 bg-olive-950"  >
            <div className="2xl:w-7xl mx-auto xl:px-[10rem]">
                <div className="flex items-center justify-center flex-col text-center">
                    <SectionStart text={"من نحن"}/>
                    <h2 className="text-[40px] md:text-[50px] lg:text-[60px]  font-bold text-white">مهمتنا هي  <span className="text-orange-600">الإعلام والإلهام</span></h2>
                    <p className="text-[16px] py-2 md:text-[20px] font-[400] text-gray-500">مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة..</p>
                </div>
                <div className="p-5 grid grid-cols-2 md:grid-cols-4 items-center justify-center ">
                    {statsInfo.map((statInfo) => {
                        return <StatBlock symbol={statInfo[0]} title={statInfo[1]} desc={statInfo[2]}/>
                    })}
                </div>
            </div>  
            </section>
            <section id="values-section" className="py-12 border-t-1 border-b-1 border-gray-800/40 overflow-hidden bg-mist-950">
                <div className="2xl:w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-[40px] text-white font-bold flex items-center justify-center ">قيمنا</h2>
                        <p className="text-[18px] py-2 text-center  font-[400] text-gray-500 pb-6 pt-2">   المبادئ التي توجه كل ما نقوم بإنشائه</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center w-[90%]">
                            {valuesInfo.map(({symbol , title , desc}) => {
                                return (
                                    <div className="group border-gray-600 mx-2 my-2 rounded-xl border-1 border-thin flex flex-col bg-olive-950 hover:bg-orange-600/10 p-4 text-center items-stretch h-full transition-all duration-200 justify-center">
                                        <span className="text-orange-600 my-1 fa-2xl "><FontAwesomeIcon icon={symbol} /></span>
                                        <span className="text-white group-hover:text-orange-600 my-1 text-2xl font-bold">{title}</span>
                                        <span className="text-gray-400 my-1 text-md">{desc}</span>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>  

            </section>
            <section id="profiles-section" className="py-12 border-t-1 border-b-1 border-gray-800/40 overflow-hidden bg-mist-950">
                <div className="2xl:w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center flex-col text-center">
                        <SectionStart text={"فريقنا"}/>
                        <h2 className="text-[40px] text-white font-bold flex items-center justify-center my-2 ">تعرف على كتابنا</h2>
                        <p className="text-[18px] py-2 text-center  font-[400] text-gray-500 pb-6 pt-2"> فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع. </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center py-6 px-12">
                        {posts.map((post)=>{
                            return <Profile profile={post.author}/>
                        })}
                    </div>
                </div>  
            </section>
            <section id="footer" className="py-8 overflow-hidden bg-linear-to-br from-orange-600 to-yellow-300 ">
                <div className="mx-auto md:w-[50%] px-6">
                    <div className="flex items-center justify-center flex-col text-center">
                        <h2 className="text-[40px] text-white font-bold flex items-center justify-center my-2 "> لديك أسئلة؟ دعنا نتحدث! </h2>
                        <p className="text-[18px] py-2 text-center  font-[400] text-gray-100 pb-6 pt-2">حب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل. </p>
                    </div>
                    <div className="flex md:flex-row flex-col items-center justify-center">
                        <button className="bg-black text-white text-md hover:-translate-y-1 transition-all hover:bg-black/90 py-4 px-6 md:w-fit w-full mx-2 rounded-xl font-bold duration-300 flex items-center justify-center my-2"><FontAwesomeIcon icon={faEnvelope} className="me-2"/>تواصل معنا</button>
                        <button className="bg-transparent text-white text-md transition-all hover:bg-white hover:text-black border-1 border-white mx-2  py-4 px-6 md:w-fit w-full rounded-xl font-bold duration-300 flex items-center justify-center my-2"><FontAwesomeIcon icon={faEnvelope} className="me-2"/><a href="/photography/articles">تصفح المقالات</a></button>
                    </div>
                </div>
            </section>
        </main>
    )
}