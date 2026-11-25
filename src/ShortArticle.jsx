export default function ShortArticle({post}){
    const {slug , title , image , author , category , readTime } = post
    return (
        <a href={"/photography/articles/" + slug} className="rounded-xl border-1 border-gray-800/50 transition-all duration-300 hover:border-orange-600/50 group" >
            <div className="relative overflow-hidden rounded-t-xl">
                <img id="article-img" className="object-cover w-full h-full rounded-xl group-hover:scale-110 transition-all duration-300 cover" src={image}/>
                <div class="absolute inset-0 bg-gradient-to-t from-black  to-transparent"></div>
                <div className="text-white text-sm font-bold absolute right-5 top-5 bg-linear-to-l from-orange-600 to-orange-300 rounded-xl px-4 flex items-center">{category}</div>
            </div>
            <div className="flex-col justify-center items-start p-4">
                <span className="font-bold text-white text-lg ">{title}</span>
                <div className="flex justify-between w-full items-center my-4 ">
                    <div className="flex items-center justify-center space-x-2">
                        <img src={author.avatar} className="size-[2rem] rounded-full"/>
                        <span className="text-gray-300/50 text-sm ">{author.name}</span>
                    </div>
                    <span className="text-gray-300/50 text-sm ">{readTime}</span>
                </div>
            </div>
        </a>
    )
}