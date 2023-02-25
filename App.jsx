import { useState } from 'react'
import Itemlist from './components/Itemlist'
import './App.css'

function App() {
  const [postsList,setPosts] = useState([
    {id:0,title:'Javascript', desc:'Some description'},
    {id:1,title:'Javascript 1', desc:'Some description'},
    {id:2,title:'Javascript 2', desc:'Some description'},
  ])
  const [postsList2,setPosts2] = useState([
    {id:0,title:'React', desc:'Some description'},
    {id:1,title:'React 1', desc:'Some description 1'},
    {id:2,title:'React 2', desc:'Some description 2'},
  ])

  return (
    <div className="App">
      <Itemlist posts={postsList}/>
      <Itemlist posts={postsList2}/>
    </div>
  )
}

export default App
