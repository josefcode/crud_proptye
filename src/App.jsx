import { useState } from 'react'
import Card from './components/card/Card'
import SideBar from './components/sideBar/SideBar'
import './app.css';

const data = [
  {
    title: 'nadar',
    category: 'sport',
    date: '12/12/2023',
    description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b'
  },
  {
    title: 'walking',
    category: 'sport',
    date: '12/12/2023',
    description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b'
  },
  {
    title: 'cenima',
    category: 'enter',
    date: '12/12/2023',
    description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b'
  },
]

function App() {
 
const date = new Date().toISOString()
  return (
    <div style = {{display: 'flex', width: '100%'}}>
    
    <SideBar />
    <div>
    {
      data.map(info => {
        const { title, category, date, description } = info

        return (
          <Card 
          key = {title}
          title = {title}
          category = {category}
          description = {description}
          date = {date}
          action = {() => alert("hello")}
          />
        )
      })
    }
  </div>
    </div>
  )
}

export default App
