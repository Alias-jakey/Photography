export default function SectionStart({text}){
    return (
        <div className="border-1 bg-[#f973161a] border-solid border-orange-800  flex items-center content-center rounded-2xl py-2 px-4">
            <div className="size-1.5 bg-orange-600 animate-[pulse_3s_ease-in_infinite] mx-1 rounded-full"></div>
            <div className="size-2 bg-orange-600 animate-[pulse_2s_ease-in_infinite] mx-2 rounded-full"></div>
            <span className="text-xs text-white font-vold">{text}</span>
        </div>
    )
}