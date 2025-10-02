import Button from "@mui/material/Button"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

const CardProfile = ({ avatar, name, bio, job}) => {
    const [liked, setLiked] = useState(false)
    const toggleLike = () => {
        setLiked(prev => !prev)
    }
    return (
        <div className="shadow-lg border-2 border-gray-300 flex w-[400px] h-[600px] p-2 flex-col items-start gap-[10px] rounded-4xl">
            <div className="relative flex flex-col justify-end flex-1 self-stretch ">
                    <img 
                    src={avatar} 
                    alt="avatar" 
                    className="w-full h-full rounded-4xl object-cover"
                    />
                <div className="absolute bottom-0 w-full bg-white/15 shadow-lg backdrop-blur-md border border-t-0 border-white/20 flex-col items-start p-4 rounded-4xl gap-1">
                    <div className="text-start mb-4">
                        <p className="text-primary text-2xl font-semibold uppercase py-2">{name}</p>
                        <p className="text-primary font-light text-md">{bio}</p>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <p className="text-primary font-light text-md gap-2">
                        <FavoriteIcon  onClick={toggleLike} className={`text-3xl transition-colors duration-300 ${ liked ? "text-red-500" : "text-gray-400" }`}/>liked</p>
                        <p className="text-primary font-light text-md">User</p>
                        <Button variant="contained" className="gap-2">
                          
                         Lorem</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

{/* <img src={avatar} alt="avatar" className="absolute inset-0 w-full h-full object-cover" />
			<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-black/0 p-3">
				<p className="text-white font-medium text-sm">{job}</p>
			</div> */}

            // <div className="avatar w-full h-full">
            //     <img src={avatar} alt='avatar' className=" w-full h-full rounded-sm"/>
            // </div>
            // <div className="w-full text-start py-2">
            //     <p className='text-gray-400 font-light text-xs'>{job} </p>
            //     <p className='text-gray-900 text-3xl font-medium tracking-tight leading-none'>{name}</p>
            // </div>
            // <div class="w-full h-[1px] bg-gray-900 mt-4 mb-2"></div>
            // <div className="footer w-full flex justify-between text-start">
            //     <p className='text-gray-400 font-light text-xs'>{bio}</p>
            // </div>

export default CardProfile