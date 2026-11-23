export default function NumberTitle({index , text}){
    return(
        <div className="flex items-center justify-start">
            <div className="bg-linear-to-br from-orange-600 me-2 to-orange-300 size-[2.5rem] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">{index}</span>
            </div>
            <span className="text-white font-bold text-2xl">{text}</span>
        </div>
    )

}