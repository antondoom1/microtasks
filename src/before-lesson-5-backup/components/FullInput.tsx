import React, {ChangeEvent, FC, useState} from 'react'

type FullInputType = {
  addMessage: (title: string) => void
}

export const FullInput: FC<FullInputType> = (props) => {
  let [title, setTitle] = useState('')

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const onClickButtonHandler = () => {
    props.addMessage(title)
    setTitle('')
  }

  return (
    <div>
      <input value={title} onChange={onChangeInputHandler}/>
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  )
}

