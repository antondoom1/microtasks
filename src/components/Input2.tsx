import React, {ChangeEvent} from 'react'

type Input2PropsType = {
  setTitle: (title: string) => void
  title: string
}

export const Input2 = (props: Input2PropsType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(event.currentTarget.value)
  }

  return (
    <input value={props.title} onChange={onChangeInputHandler}/>
  )
}

