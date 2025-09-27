const CardProfile = ({ avatar, name, bio, job}) => {

    return (
        <div className="w-[250px]max-w-sm bg-white shadow-lg border-2 border-gray-300 py-6 px-5 rounded-md flex flex-col justify-center items-center">
            <div className="avatar w-full h-full">
                <img src={avatar} alt='avatar' className=" w-full h-full rounded-sm"/>
            </div>
            <div className="w-full text-start py-2">
                <p className='text-gray-400 font-light text-xs'>{job} </p>
                <p className='text-gray-900 text-3xl font-medium tracking-tight leading-none'>{name}</p>
            </div>
            <div class="w-full h-[1px] bg-gray-900 mt-4 mb-2"></div>
            <div className="footer w-full flex justify-between text-start">
                <p className='text-gray-400 font-light text-xs'>{bio}</p>
            </div>
        </div>
    )
}

export default CardProfile