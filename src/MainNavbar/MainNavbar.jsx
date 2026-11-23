import "./MainNavbar.css"
import mainLogo from "../assets/photography-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faL, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"

export default function MainNavbar(){
    const [navlink , setNavlink] = useState(null)
    const [navbar , setNavbar] = useState(true)
    const pages = {
        "/photography" : 0,
        "/photography/articles" : 1,
        "/photography/about" : 2,
    }
    function setActiveNavlink(){
        setNavlink(pages[window.location.pathname])
    }
    function openNavbar(){
        if(navbar){
            setNavbar(false)
        }else{
           setNavbar(true) 
        }
    }
    useEffect(setActiveNavlink , [])
    return (
        <nav id="main-navbar" className="bg-olive-950  py-2 overflow-hidden fixed top-0 left-0 right-0 z-99 border-b-1 border-gray-800 transition-all duration-300">
            <div className="2xl:w-7xl mx-auto "> 
                <div className="flex items-center justify-between p-2 relative flex-wrap">
                    <a href="/photography" className="md:w-fit w-full">
                        <div className="flex items-center justify-start ms-4 group md:w-fit w-full">
                         <img src={mainLogo} className="transition-all duration-150 ease-in size-[3rem] group-hover:scale-110"/>
                        <div className="px-4">
                            <span className="block text-white text-xl font-bold">عدسة</span>
                            <span className="block text-sm text-orange-400 ">عالم التصوير الفوتوغرافي</span>
                        </div>
                    </div>
                    </a>
                    <div className={navbar ? "border-1 border-gray-800 bg-mist-950 rounded-full border-solid p-3 md:block hidden md:w-fit w-full" : "border-1 border-gray-800 bg-mist-950 rounded-2xl border-solid p-3 md:block my-6 flex flex-col md:w-fit w-full" }>
                            <a onClick={setActiveNavlink} href="/photography" className={navlink == "0" ? "nav-link md:w-fit w-full text-gray-400 py-2 px-4 rounded-full text-sm font-semibold hover:text-white transition-all duration-100 active py-2 my-1 " : "nav-link text-gray-400 py-2 px-4 rounded-full text-sm font-semibold hover:text-white transition-all duration-300 py-2 my-1 hover:bg-neutral-950"} >
                                 الرئيسية
                            </a>
                            <a onClick={setActiveNavlink} href="/photography/articles" className={navlink == "1" ? "nav-link md:w-fit w-full text-gray-400 py-2 px-4 rounded-full text-sm font-semibold hover:text-white transition-all duration-300 active py-2 my-1 " : "nav-link text-gray-400 py-2 px-4 rounded-full text-sm font-semibold hover:text-white transition-all duration-300 py-2 my-1 hover:bg-neutral-950"}>
                                المدونة
                            </a>
                            <a onClick={setActiveNavlink} href="/photography/about" className={navlink == "2" ? "nav-link md:w-fit w-full text-gray-400 py-2 px-4 rounded-full text-sm font-semibold hover:text-white transition-all duration-300 active py-2 my-1" : "nav-link text-gray-400 py-2 px-4 rounded-full text-sm font-semibold hover:text-white transition-all duration-300 py-2 my-1 hover:bg-neutral-950"}>
                                من نحن
                            </a>
                    </div>
                    <div className={navbar ? "md:flex hidden" : " flex w-full md:w-fit"}>
                        <div className="me-3 hidden md:block text-gray-400 p-2.5  transition-all duration-150 hover:border-1 md:w-fit w-full rounded-full hover:border-gray-700 hover:bg-olive-900 border-solid group md:rounded-xl ">
                            <a className="" >
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-lg" />
                            </a>
                        </div>
                        <a href="/articles" className="w-full md:mx-0 mx-4">
                            <button className="w-full  hover:-translate-y-1 transition-all duration-300 md:w-fit bg-linear-to-l from-orange-400 to-orange-500 py-3 px-6 text-white rounded-2xl text-md font-bold">
                                 ابدأ القراءة
                            </button>
                        </a>
                    </div>
                    <button onClick={openNavbar} className="flex items-center justify-center absolute left-5 top-3 md:hidden p-2 py-3 rounded-xl border-1 border-transparent hover:border-gray-700 border-solid transition-all duration-300 hover:border-1">
                        <FontAwesomeIcon icon={faBars} className="text-gray-400 fa-lg"/>
                    </button>
                </div>
            </div>
        </nav>
    )
}