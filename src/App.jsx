import './App.css'
import CardProfile from './components/Card'

const profilesData = [
  {
    avatar: "https://i.pravatar.cc/150?img=12",
    name: "Al Ghaza",
    bio: "Love God",
    age: 20
  },
  {
    avatar: "https://i.pravatar.cc/150?img=34",
    name: "Sakura Tanaka",
    bio: "Dreaming big, living simple",
    age: 22
  },
  {
    avatar: "https://i.pravatar.cc/150?img=56",
    name: "Michael Rivera",
    bio: "Coding & coffee addict",
    age: 25
  }
];


function App() {
  return (
    <>
      <div className='border-2 border-red-500 p-4 h-screen max-w-screen flex flex-col gap-4'>
        {profilesData.map((profile) => {
        return ( 
            <CardProfile 
              avatar={profile.avatar}
              name={profile.name}
              bio={profile.bio}
              age={profile.age}
            />
          );
        })}
      </div>
    </>
  )
}

export default App
