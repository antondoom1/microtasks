import React, {useState} from 'react'
import {Button} from '../components/Button'
import {NewComponent2} from './NewComponent2'

type FilterType = 'All' | 'Rubles' | 'Dollars'

export const FilterMoney = () => {

  const [money, setMoney] = useState([
    {banknote: 'Dollars', value: 100, number: ' a1234567890'},
    {banknote: 'Dollars', value: 50, number: ' z1234567890'},
    {banknote: 'RUBLES', value: 100, number: ' w1234567890'},
    {banknote: 'Dollars', value: 100, number: ' e1234567890'},
    {banknote: 'Dollars', value: 50, number: ' c1234567890'},
    {banknote: 'RUBLES', value: 100, number: ' r1234567890'},
    {banknote: 'Dollars', value: 50, number: ' x1234567890'},
    {banknote: 'RUBLES', value: 50, number: ' v1234567890'}
  ])

  const [filter, setFilter] = useState<FilterType>('All')

  let currentMoney = money
  if (filter === 'Dollars') {
    currentMoney = money.filter(el => el.banknote === 'Dollars')
  }
  if (filter === 'Rubles') {
    currentMoney = money.filter(el => el.banknote === 'RUBLES')
  }

  const onClickFilterHandler = (name: FilterType) => {
    setFilter(name)
  }

  return (
    <div>
      <NewComponent2 money={currentMoney}/>
      <Button name={'All'} callBack={() => onClickFilterHandler('All')}/>
      <Button name={'Rubles'} callBack={() => onClickFilterHandler('Rubles')}/>
      <Button name={'Dollars'} callBack={() => onClickFilterHandler('Dollars')}/>
    </div>
  )
}

