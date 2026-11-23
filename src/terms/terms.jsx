import { faChevronLeft, faX, faEnvelope, faFile, faUserShield, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberTitle from "../Number";

export default function Terms(){
    return (
        <main>
            <section id="hero-section" className="py-16 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px] overflow-hidden pt-35 bg-olive-950"  >
            <div className="2xl:w-7xl mx-auto xl:px-[20rem]">
                <div className="flex items-center justify-center flex-col text-center">
                    <div className="flex items-center justify-content my-4">
                        <a href="/" className="text-gray-600 text-sm transition-all duration-300 hover:text-orange-600">الرئيسية</a>
                        <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 mx-2"/>
                        <span className="text-orange-600 text-sm">شروط الخدمة</span>
                    </div>
                    <div className="flex items-center justify-center size-[4rem] border-1 border-orange-700 bg-orange-500/10 rounded-xl ">
                        <FontAwesomeIcon icon={faFile} className="fa-2xl text-orange-600"/>
                    </div>
                    <h2 className="text-[20px] md:text-[30px] lg:text-[40px]  font-bold text-white">شروط الخدمة</h2>
                    <p className="text-[16px] py-2 md:text-[20px] lg:text-[24px] font-[400] text-gray-500">آخر تحديث: 15 يناير 2026.</p>
                </div>
            </div>  
            </section>
            <section id="privacy-section" className="overflow-hidden py-10 bg-mist-950">
                <div className="lg:w-4xl mx-auto px-8 border-b-1 border-gray-800">
                    <div className="flex-col items-center justify-start my-4">
                        <div className="border-yellow-700 bg-yellow-500/10 rounded-xl px-4 border-1 py-6 flex items-center justify-start">
                            <span className="text-yellow-600  ">
                                <FontAwesomeIcon icon={faWarning} className="fa-lg"/>
                            </span>
                            <div className="flex flex-col items-start mx-2 justify-start">
                                <span className="text-lg font-bold text-yellow-600 ">إشعار مهم</span>
                                <p className="text-md  text-yellow-600 ">يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={1} text={"الموافقة على الشروط"}/>
                        <p className="text-gray-600 text-lg ps-10 my-2">بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.</p>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={2} text={"رخصة الاستخدام"}/>
                        <p className="text-gray-600 text-lg ps-10 my-2">يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.</p>
                        <p className="text-neutral-400 font-[900] text-md ps-10 my-2">بموجب هذا الترخيص لا يجوز لك:</p>
                        <ul className="ps-10 my-4">
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-white font-bold mx-2 text-md">بيانات الهوية: <span className="text-gray-600 text-md">تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.</span></span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-white font-bold mx-2 text-md">بيانات الاتصال:<span className="text-gray-600 text-md">تشمل عنوان البريد الإلكتروني.</span></span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-white font-bold mx-2 text-md">البيانات التقنية: <span className="text-gray-600 text-md">تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.</span></span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-white font-bold mx-2 text-md">بيانات الاستخدام:<span className="text-gray-600 text-md"> تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.</span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={3} text={"كيف نستخدم معلوماتك"}/>
                        <ul className="ps-10 my-4">
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">تعديل أو نسخ المواد</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">استخدام المواد لأي غرض تجاري أو للعرض العام</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">إزالة أي حقوق نشر أو علامات ملكية من المواد</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</span>
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
                        <NumberTitle index={3} text={"كيف نستخدم معلوماتك"}/>
                        <ul className="ps-10 my-4">
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">طلب الوصول إلى بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">طلب تصحيح بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md">طلب مسح بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> الاعتراض على معالجة بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> طلب تقييد معالجة بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-center justify-start my-2">
                                <FontAwesomeIcon icon={faX} className="text-red-600 fa-md"/>
                                <span className="text-gray-600  mx-2 text-md"> الحق في سحب الموافقة</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-col items-center justify-start my-8">
                        <NumberTitle index={6} text={"أمان البيانات"}/>
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