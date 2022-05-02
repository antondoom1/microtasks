import React from 'react'
import './CarsTable.css'

type topCarsType = {
  manufacturer: string
  model: string
}

export const CarsTable = () => {
  const topCars: Array<topCarsType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ]
  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Manufacturer</th>
        <th>Model</th>
      </tr>
      </thead>
      <tbody>
      {topCars.map((el, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{el.manufacturer}</td>
            <td>{el.model}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

