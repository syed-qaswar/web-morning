import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

const courses = [
  {title: 'Web Development', desc: 'Learn Web Development'},
  {title: 'SEO', desc: 'Learn SEO with new techniques'},
  {title: 'Graphics', desc: 'Learn graphics with modern designs'},
  {title: 'AI', desc: 'Learn AI Concepts'},
]

function App() {
  return (
    <>      
    <Navbar />
    <div>
      {courses.map((course) =>(
        <Card title={course.title} desc={course.desc} />
      ))}
    </div>
    </>
  )
}

export default App
