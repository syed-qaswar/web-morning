import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

const courses = [
  {title: 'Web Development', desc: 'Learn Web Development', style: 'flex-1 border-2 border-amber-300 p-2'},
  {title: 'SEO', desc: 'Learn SEO with new techniques', style: 'flex-1 border-2 border-amber-300 p-2'},
  {title: 'Graphics', desc: 'Learn graphics with modern designs', style: 'flex-1 border-2 border-amber-300 p-2'},
  {title: 'AI', desc: 'Learn AI Concepts', style: 'flex-1 border-2 border-amber-300 p-2'},
]

const teams = [
  {title: 'Ahmed', desc: 'Web Developer', style: 'flex-1 border-2 border-blue-300 p-2'},
  {title: 'Faizan', desc: 'SEO Expert', style: 'flex-1 border-2 border-blue-300 p-2'},
  {title: 'Zunair', desc: 'Graphic Designer', style: 'flex-1 border-2 border-blue-300 p-2'},
]

function App() {
  return (
    <>      
    <Navbar />
    <div className='bg-sky-200 h-[50vh] flex flex-col justify-center gap-2'>
      <h1 className='text-3xl font-bold'>Services</h1>

      {/* cards container */}
      < div className='flex gap-2'>
      {courses.map((course) =>(
        <Card title={course.title} desc={course.desc} style={course.style} />
      ))}
      </div>
    </div>

    {/* teams */}
    <div>
      <h1>Teams</h1>
      {/* cards container */}
      < div className='flex gap-2'>
      {teams.map((team) =>(
        <Card title={team.title} desc={team.desc} style={team.style} />
      ))}
      </div>
    </div>
    </>
  )
}

export default App
