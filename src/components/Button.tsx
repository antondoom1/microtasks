import React from 'react'

type ButtonType = {
  name: string
  callBack: () => void
}

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.callBack()
  }
  return (
    <div style={{marginLeft: '15px', display: 'inline'}}>
      <button onClick={onClickHandler}>{props.name}</button>
    </div>
  )
}

