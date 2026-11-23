import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars, faChevronLeft, faChevronRight, faMagnifyingGlass, faNewspaper, faTableCells } from "@fortawesome/free-solid-svg-icons";
import {categories} from "../posts.json"
import CategorySpan from "../CategorySpan";
import {posts} from "../posts.json"
import Article from "../Article.jsx"
import "./articles.css"
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export default function Articles(){
    const [newPosts , setNewPosts] = useState(structuredClone(posts))
    const [shape , setShape] = useState("grid")
    const [page , setPage] = useState(1)
    const [category , setCategory] = useState(0)
    const [pages, setPages] = useState(pagination(newPosts))
        useEffect(()=>{
            if(location.search != ""){
                let cat = location.search.split("=")[1]
                categories.find((category , idx)=>{
                    if(idx == cat){
                        ToggleCategory(idx+1)
                    }
                })
            }
        } , [])
    function toggleShape(type){
        const gridToggle = document.querySelector("#grid-toggle").children
        if(type == "grid"){
            setShape(type)
            gridToggle[1].classList.remove("active")
            gridToggle[0].classList.add("active")
        }else{
            setShape(type)
            gridToggle[1].classList.add("active")
            gridToggle[0].classList.remove("active")
        }
    }
    function ToggleCategory(idx){
        setCategory(idx)
        if(idx ==0){
            setNewPosts(posts)
            setPages(pagination(posts))
            setPage(1)
            return
        }
        let cat = categories[idx-1].name
        let tempPosts =posts.filter((post)=>{
            if(post.category == cat){
                return post
            }
        })
        setNewPosts(tempPosts)
        setPages(pagination(tempPosts))
        setPage(1)
    }
    function pagination(posts){
        let tempPages= []
        for(let i =0;i<Math.ceil(posts.length  / 6);i++){
            let page = posts.slice(i * 6 , (i+1) * 6)
            tempPages.push(page)
        }
        return tempPages
    }
    
    if(window.location.pathname == "/articles"){
        return(
            <>  
            <main>
            <section id="hero-section" className="bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px] overflow-hidden py-35 bg-olive-950"  >
            <div className="2xl:w-7xl mx-auto xl:px-[20rem]">
                <div className="flex items-center justify-center flex-col text-center">
                    <div className="border-1 bg-[#f973161a] border-solid border-orange-800  flex items-center content-center rounded-2xl py-2 px-4">
                        <div className="size-1.5 bg-orange-600 animate-[pulse_3s_ease-in_infinite] mx-1 rounded-full"></div>
                        <div className="text-orange-600 mx-2"><FontAwesomeIcon icon={faNewspaper} className="text-orange-600 fa-sm"/></div>
                        <span className="text-xs text-orange-600 font-vold">مدونتنا</span>
                    </div>  
                    <h2 className="text-[40px] md:text-[50px] lg:text-[60px]  font-bold text-white">استكشف  <span className="text-orange-600">مقالاتنا</span></h2>
                    <p className="text-[16px] py-2 md:text-[20px] lg:text-[24px] font-[400] text-gray-500">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
                </div>
            </div>  
            </section>
            <section id="search-section" className="bg-mist-950 overflow-hidden  border-b-1 border-gray-800 sticky top-20 z-20 ">
                <div className="2xl:w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-between py-4 ">
                        <div className="relative col-span-1 px-4">
                            <input className="bg-mist-900 rounded-lg w-full focus:border-orange-400 py-2.5 text-gray-300 px-4 border-1 border-gray-600 border-solid mx-2" placeholder="ابحث في المقالات..."/>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 fa-lg absolute left-4 top-3"/>
                        </div> 
                        <div className="col-span-1 md:col-span-2 lg:col-start-3 my-4 flex items-center justify-center flex-wrap">
                            <button className="my-3" onClick={()=>{ToggleCategory(0)}}><span className={category == 0 ? "category-span font-[400] text-neutral-400 py-2 px-3 border-1 border-gray-800 bg-neutral-900 my-1 transition-all duration-300 hover:border-orange-600 active me-3 rounded-xl" : "category-span font-[400] text-neutral-400 py-2 px-3 border-1 border-gray-800 bg-neutral-900 my-1 transition-all duration-300 hover:border-orange-600 me-3 rounded-xl"}>جميع المقالات</span></button>
                            {categories.map((cat , idx) =>{return <CategorySpan text={cat.name} id={idx+1} event={ToggleCategory} currentIdx={category}/>})}
                        </div>
                    </div>
                </div>
            </section>
            <section id="articles-section" className="bg-mist-950 overflow-hidden ">
                <div className="2xl:w-7xl mx-auto py-8">
                    <div className="flex items-center justify-center flex-col px-4 py-4">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-gray-600">عرض <span className="text-white font-bold"></span> مقالات</span>
                            <div id="grid-toggle" className="p-1 bg-neutral-900 border-1 border-gray-800 flex items-center justify-center rounded-lg">
                                <button onClick={() =>{toggleShape("grid")}} className="active size-[2rem] flex items-center justify-center text-gray-600 rounded-lg">
                                    <FontAwesomeIcon icon={faTableCells} className="fa-lg "/>
                                </button>
                                <button onClick={() =>{toggleShape("horizontal")}} className="size-[2rem] flex items-center justify-center text-gray-600 rounded-lg">
                                    <FontAwesomeIcon icon={faBars} className="fa-lg "/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="article-grid" className={shape == "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6" : "grid grid-cols-1 gap-12 px-6"}>
                        {pages[page-1].map((post) => {return <Article tagIsHidden={true} type={shape} data={post}/>})}
                    </div>
                </div>
            </section>
            <section id="pagination-section" className="bg-mist-950 overflow-hidden">
                <div className="2xl:w-7xl mx-auto py-8">
                    <div className="flex items-center justify-center w-full">
                        <button disabled={page == 1 ? true : false} onClick={()=>{let c = page;setPage(--c)}}  className={page == 1 ? "disabled border-gray-800/50 border-1 text-gray-400 bg-gray-800/10 size-[2.5rem] mx-1 rounded-lg" : "border-gray-800/50 border-1 text-gray-400 bg-gray-800/10 size-[2.5rem] mx-1 rounded-lg transition-all duration-300 hover:border-orange-600/50"}><FontAwesomeIcon icon={faChevronRight} className="fa-lg"/></button>
                        {pages.map((_page , idx)=>{
                           return <button onClick={() =>{setPage(idx+1)}}className={idx + 1 == page ? "active border-gray-800/50 border-1 text-gray-400 bg-gray-800/10 size-[2.5rem] mx-1 rounded-lg transition-all duration-300 hover:border-orange-600/50" : "border-gray-800/50 border-1 text-gray-400 bg-gray-800/10 size-[2.5rem] mx-1 rounded-lg transition-all duration-300 hover:border-orange-600/50"}>{idx+1}</button>
                        })}
                        <button disabled={page == Math.ceil(newPosts.length / 6) ? true : false} onClick={()=>{let c = page;console.log(c);setPage(++c)}}  className={page == Math.ceil(newPosts.length / 6)  ? "disabled border-gray-800/50 border-1 text-gray-400 bg-gray-800/10 size-[2.5rem] mx-1 rounded-lg" : "border-gray-800/50 border-1 text-gray-400 bg-gray-800/10 size-[2.5rem] mx-1 rounded-lg transition-all duration-300 hover:border-orange-600/50"}><FontAwesomeIcon icon={faChevronLeft} className="fa-lg"/></button>
                    </div>
                </div>
            </section>
            </main>
            <Outlet/>
        </>
        )
    }else{
        return(
        <> 
            <Outlet/>
        </>
        )
    }
    
}