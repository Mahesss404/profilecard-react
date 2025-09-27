// type ProfileData = {
//  avatar: String;
//  name: String;
//  bio: String;
//  age: Number;
// }


const CardProfile = ({ avatar, name, bio, age}) => {

    return (
        <div className="w-52 bg-red-200 py-6 px-5 rounded-md flex flex-col justify-center items-center gap-4">
            <img src={avatar} alt='avatar' className='w-20 h-20 bg-white rounded-full flex justify-center items-center'/>
            <p className='text-red-500'>{name}</p>
            <p className='text-red-500'>{bio} </p>
            <p className='text-red-500'>{age} Tahun</p>
        </div>
    )
}

export default CardProfile