import React, {useState} from 'react'
import {FullInput} from '../components/FullInput'
import {Input2} from '../components/Input2'
import {Button2} from '../components/Button2'

export const Input = () => {
  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'}
  ])

  let [title, setTitle] = useState('')

  const addMessage = (title: string) => {
    setMessage([{message: title}, ...message])
  }

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }

  return (
    <div className={'wrapper'}>
      {/*<FullInput addMessage={addMessage}/>*/}
      <Input2 setTitle={setTitle} title={title}/>
      <Button2 name={'+'} callBack={callBackButtonHandler}/>
      {message.map((el, i) => {
        return (
          <div key={i}>{el.message}</div>
        )
      })}
    </div>
  )
}