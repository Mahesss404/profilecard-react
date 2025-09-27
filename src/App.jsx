import './App.css'
import CardProfile from './components/Card'

const profilesData = [
  {
    avatar: "https://i.pravatar.cc/150?img=12",
    name: "Fadhil Al Ghaza",
    bio: "Love God",
    job: "frontend"
  },
  {
    avatar: "https://i.pravatar.cc/150?img=34",
    name: "Sakura Tanaka",
    bio: "Dreaming big, living simple",
    job: "frontend"
  },
  {
    avatar: "https://i.pravatar.cc/150?img=56",
    name: "Michael Rivera",
    bio: "Coding & coffee addict",
    job: "frontend"
  }
];


function App() {
  return (
    <>
      <div className='border-2 border-red-500 p-4 flex flex-wrap gap-4'>
        {profilesData.map((profile) => {
        return ( 
            <CardProfile 
              avatar={profile.avatar}
              name={profile.name}
              bio={profile.bio}
              job={profile.job}
            />
          );
        })}
      </div>
    </>
  )
}

export default App
