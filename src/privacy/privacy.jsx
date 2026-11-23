import { faChevronLeft, faCircleCheck, faEnvelope, faLocation, faLock, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberTitle from "../Number";

export default function Privacy(){
    return (
        <main>
            <section id="hero-section" className="py-16 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px] overflow-hidden pt-35 bg-olive-950"  >
            <div className="2xl:w-7xl mx-auto xl:px-[20rem]">
                <div className="flex items-center justify-center flex-col text-center">
                    <div className="flex items-center justify-content my-4">
                        <a href="/" className="text-gray-600 text-sm transition-all duration-300 hover:text-orange-600">الرئيسية</a>
                        <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 mx-2"/>
                        <span className="text-orange-600 text-sm">سياسة الخصوصية</span>
                    </div>
                    <div className="flex items-center justify-center size-[4rem] border-1 border-orange-700 bg-orange-500/10 rounded-xl ">
                        <FontAwesomeIcon icon={faLock} className="fa-2xl text-orange-600"/>
                    </div>
                    <h2 className="text-[20px] md:text-[30px] lg:text-[40px]  font-bold text-white">سياسة الخصوصية</h2>
                    <p className="text-[16px] py-2 md:text-[20px] lg:text-[24px] font-[400] text-gray-500">آخر تحديث: 15 يناير 2026.</p>
                </div>
            </div>  
            </section>
            <section id="privacy-section" className="overflow-hidden py-10 bg-mist-950">
                <div className="lg:w-4xl mx-auto px-8 border-b-1 border-gray-800">
                    <div className="flex-col items-center justify-start my-4">
                        <div className="border-orange-700 bg-orange-500/10 rounded-xl px-4 border-1 py-6 flex items-center justify-start">
                            <span className="text-orange-600  ">
                                <FontAwesomeIcon icon={faUserShield} className="fa-lg"/>
                            </span>
                            <div className="flex flex-col items-start mx-2 justify-start">
                                <span className="text-lg font-bold text-orange-600 ">خصوصيتك تهمنا</span>
                                <p className="text-md  text-yellow-600 "> خصوصيتك تهمنا
نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={1} text={"مقدمة"}/>
                        <p className="text-gray-600 text-lg ps-10 my-2">مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.</p>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={2} text={"المعلومات التي نجمعها"}/>
                        <ul className="ps-10 my-4">
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-white font-bold mx-2 text-md">بيانات الهوية: <span className="text-gray-600 text-md">تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.</span></span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-white font-bold mx-2 text-md">بيانات الاتصال:<span className="text-gray-600 text-md">تشمل عنوان البريد الإلكتروني.</span></span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-white font-bold mx-2 text-md">البيانات التقنية: <span className="text-gray-600 text-md">تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.</span></span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-white font-bold mx-2 text-md">بيانات الاستخدام:<span className="text-gray-600 text-md"> تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.</span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={3} text={"كيف نستخدم معلوماتك"}/>
                        <ul className="ps-10 my-4">
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">لتقديم خدمتنا والحفاظ عليها</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">لإخطارك بالتغييرات في خدمتنا</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">لتقديم دعم العملاء التقن</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> لمراقبة استخدام خدمتنا</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> لاكتشاف ومنع ومعالجة المشاكل التقنية</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={4} text={"ملفات تعريف الارتباط"}/>
                        <p className="text-gray-600 text-lg ps-10 my-2">نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا..</p>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={5} text={"أمان البيانات"}/>
                        <p className="text-gray-600 text-lg ps-10 my-2">لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.</p>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={6} text={"كيف نستخدم معلوماتك"}/>
                        <ul className="ps-10 my-4">
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">طلب الوصول إلى بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">طلب تصحيح بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">طلب مسح بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> الاعتراض على معالجة بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> طلب تقييد معالجة بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> الحق في سحب الموافقة</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={7} text={"أمان البيانات"}/>
                        <p className="text-gray-600 text-lg ps-10 my-2">إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:</p>
                        <a className="text-orange-600 text-lg ps-10 my-2 flex items-center group transition-all duration-300 hover:text-orange-300">
                            <FontAwesomeIcon icon={faEnvelope} className="lg text-orange-600 mx-2  transition-all duration-300 group-hover:text-orange-300"/>
                            hello@adasah.com
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center py-10">
                    <span className="text-gray-600 text-sm">باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً</span>
                    <a href="/terms" className="text-orange-600 text-sm mx-1 hover:text-orange-300 transition-all duration-300">شروط الخدمة.</a>
                </div>
            </section>
        </main>
    )
}