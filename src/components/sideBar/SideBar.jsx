import React from 'react'
import { styled } from '@mui/material'
import axios from 'axios'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, updateTodo } from '../../requests/todos';

const Root = styled('div')({
  background:'blue',  
  height: '100vh',
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center'
})
const StyledForm = styled('form')({
  background: 'white',
  border: '1px solid black',
  minWidth: '180px',
  minHeight: '150px',
  marginInline: '1rem',
  paddingInline: '1rem',
  display: 'flex',
  flexDirection: 'column',
   'h1': {
    marginBlock: '1rem',
    fontSize: '1.5rem'
   },
  'input': {
    border: 'none',
    borderBottom  : '1px solid gray',
    padding: '0.5rem',
    marginBlockEnd: '1rem'
  },

  'button': {
    padding: '1rem',
    background: '#E84118',
    marginBlock: '1rem',
    border: 'none',
    color: 'white'
  }
  
})

export default function SideBar() {
const queryClient = useQueryClient();

const { mutate } = useMutation(addTodo, {
  onSuccess: () => queryClient.invalidateQueries(["@todos"]),
  onError: () => alert("NOK"),
});

  const [formData, setFormData] = React.useState(
    {   
    title: "",   
    date: "",   
    category: "",   
    description: "",  
    }
    )

    function handleChange(event) {
      const {name, value} = event.target
      setFormData(prevFormData => {
      return {
      ...prevFormData,
      [name]: value
      }
      })
      }

      
      
      function handleSubmit(event) {

        event.preventDefault()
          const {title, date } = formData
        // submitToApi(formData)
        mutate({ title, date })
      }
        

// useMutation({
//   mutationFn: updateTodo,
//   // When mutate is called:
//   onMutate: async (newTodo) => {
//     // Cancel any outgoing refetches
//     // (so they don't overwrite our optimistic update)
//     await queryClient.cancelQueries({ queryKey: ['@todos'] })

//     // Snapshot the previous value
//     const previousTodos = queryClient.getQueryData(['@todos'])

//     // Optimistically update to the new value
//     queryClient.setQueryData(['@todos'], (old) => [...old, newTodo])

//     // Return a context object with the snapshotted value
//     return { previousTodos }
//   },
//   // If the mutation fails,
//   // use the context returned from onMutate to roll back
//   onError: (err, newTodo, context) => {
//     queryClient.setQueryData(['@todos'], context.previousTodos)
//   },
//   // Always refetch after error or success:
//   onSettled: () => {
//     queryClient.invalidateQueries({ queryKey: ['@todos'] })
//   },
// })

      
     

  return (
    <Root>

      <StyledForm onSubmit={handleSubmit}>
        <h1>Cadastrar Tarefa</h1>
        <input 
        type = 'text' 
        placeholder='Título' 
        required 
        name = 'title'
        onChange = {handleChange}
        />
        <input 
        type = 'text' 
        placeholder='Categoria' 
        required 
        name = 'category'
        onChange = {handleChange}
        />
        <input 
        type = 'date' 
        placeholder='Data' 
        required 
        name = 'date'
        onChange = {handleChange}
        />
        <input 
        type = 'text' 
        placeholder='Descrição' 
        required 
        name = 'description'
        onChange = {handleChange}
        />
        <button type = 'submit'>Salver</button>
      </StyledForm>
        
    </Root>
  )
}
