import React, {useState} from 'react'

export default function TodoInput(props) {

    const {handleAddTodo ,inputValue, setInputValue} = props


  return (
    <header>
        <input value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)
        }} placeholder='EnterTodos' />
        <button onClick={() => {
            handleAddTodo(inputValue)
            setInputValue('')
        }} >Add Note</button>
        <button>Find</button>
    </header>
  )
}
