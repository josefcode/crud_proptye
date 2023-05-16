import React from 'react'
import {string,instanceOf, func } from 'prop-types'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {styled} from '@mui/material'

const Root = styled('div')({
  height: '100px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid gray',
  borderRadius: '10px',
  boxShadow: '1px 1px 1px rgba(189, 195, 199, 0.5)',
  // lineHeight: 0.5,
  padding: '1rem',
  margin: '1rem',

  '& .title': {
      fontSize: '16px'
  },

  '& .Primary': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  '& .Secondary': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  

})

export default function Card({title, category, description, date, action }) {
  return (
    <Root>
      <div className = "Primary">
          <div>

              <h1 className = 'title'>{title}</h1>
              <p>{category}</p>
          </div>

              <p>{date}</p>
      </div>


        <div className = "Secondary">
                <p>{description}</p>
            <div>
                <EditNoteIcon onClick = {action}
                sx = {{
                  color: '#1da473'
                }}
                />
                <DeleteForeverIcon  onClick = {action} 
                sx = {{
                  color: '#f44336'
                 }}/>
            </div>
        </div>
        
    </Root>
  )
}


Card.prototype = {
    title: string,
    category: string,
    date: instanceOf(Date),
    description: string,
    action: func
}