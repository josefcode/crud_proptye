import { useEffect, useState } from 'react'
import Card from './components/card/Card'
import SideBar from './components/sideBar/SideBar'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, getTodos } from "./requests/todos";
import './app.css';


// const data = [
//   {
//     title: 'nadar',
//     category: 'sport',
//     date: '12/12/2023',
//     description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b'
//   },
//   {
//     title: 'walking',
//     category: 'sport',
//     date: '12/12/2023',
//     description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b'
//   },
//   {
//     title: 'cenima',
//     category: 'enter',
//     date: '12/12/2023',
//     description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b'
//   },
// ]

function App() {

  const deletePost = useMutation((id) => {
    return deleteTodo(id);
  });


// const queryClient = useQueryClient();
const { data, isFetching, error } = useQuery(["@todos"], getTodos, {
  refetchOnWindowFocus: false,
});


if (isFetching) {
  return <h3>Carregando...</h3>;
}

if (error) {
  return <h3>Erro ao buscar dados </h3>;
}

  return (
    <div style = {{display: 'flex', width: '100%'}}>
    
    <SideBar />
    <div>
    {
      data.map((info, index) => {
        const { title, category, date, description } = info
        // console.log(index)
        return (
          <Card 
          key = {title}
          title = {title}
          category = {category}
          description = {description}
          date = {date}
          action = {() => {
            console.log('hello')
            deletePost.mutate(index)}}
          />
        )
      })
    }
  </div>
    </div>
  )
}

export default App
