import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub , faLinkedin ,  faXTwitter} from "@fortawesome/free-brands-svg-icons"
import Social from "./Social.jsx"
const socials = [[faXTwitter , "https://twitter.com/adasah"] 
, [ faGithub , "https://github.com/adasah" ],
[faLinkedin , "https://linkedin.com/company/adasah"]
]



export default function Profile({profile}){
    const {avatar , name , role} = profile
    return (
    <div className="flex flex-col transition-all duration-300 bg-white/5 text-center items-center justify-center py-6 group hover:border-orange-600/50 border-1 border-gray-800/50 rounded-xl">
        <div className="relative mb-4">
            <img src={avatar} alt={name} className="rounded-full size-[6rem]  group-hover:border-orange-600/50 border-3 border-gray-800/10 "/>
            <div className="absolute bg-orange-600 bottom-0 right-0 border-black/50 border-1 size-6 text-sm"><FontAwesomeIcon icon={faCheck}/></div>
        </div>
        <span className="text-lg text-white font-bold ">{name}</span>
        <span className="text-md text-orange-600 font-[400] ">{role}</span>
        <div className="mt-4 flex items-center justify-center space-x-1 ">
           {socials.map((social)=>{
                            return <Social symbol={social[0]} link={social[1]}/>
                        })}
        </div>
    </div>
    )
}