import React from 'react'

type NewComponent2Type = {
  money: Array<MoneyType>
}

type MoneyType = {
  banknote: string
  value: number
  number: string
}

export const NewComponent2 = (props: NewComponent2Type) => {
  return (
    <ul>
      {props.money.map((objFromMoneyArr, i) => {
        return (
          <li key={i}>
            <span> {objFromMoneyArr.banknote} </span>
            <span> {objFromMoneyArr.value} </span>
            <span> {objFromMoneyArr.number} </span>
          </li>
        )
      })}
    </ul>
  )
}