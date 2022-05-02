import React, {useState} from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v1} from 'uuid'

export type TodolistsType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

  let todolistID1 = v1()
  let todolistID2 = v1()

  let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'}
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: 'HTML&CSS', isDone: true},
      {id: v1(), title: 'JS', isDone: true},
      {id: v1(), title: 'ReactJS', isDone: false},
      {id: v1(), title: 'Rest API', isDone: false},
      {id: v1(), title: 'GraphQL', isDone: false}
    ],
    [todolistID2]: [
      {id: v1(), title: 'HTML&CSS2', isDone: true},
      {id: v1(), title: 'JS2', isDone: true},
      {id: v1(), title: 'ReactJS2', isDone: false},
      {id: v1(), title: 'Rest API2', isDone: false},
      {id: v1(), title: 'GraphQL2', isDone: false}
    ]
  })

  function removeTask(todoListId: string, id: string) {
    setTasks({...tasks, [todoListId]: tasks[todoListId].filter(t => t.id !== id)})
  }

  function addTask(todoListId: string, title: string) {
    const newTask = {id: v1(), title, isDone: false}
    setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
  }

  function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
    setTasks({...tasks, [todoListId]: tasks[todoListId].map(t => t.id === taskId ? {...t, isDone} : t)})
  }

  function changeFilter(todoListId: string, value: FilterValuesType) {
    setTodolists(todolists.map(tdl => tdl.id === todoListId ? {...tdl, filter: value} : tdl))
  }

  function removeTodoList(todoListId: string) {
    setTodolists(todolists.filter(tdl => tdl.id !== todoListId))
    delete tasks[todoListId]
  }

  return (
    <div className="App">
      {todolists.map(tdl => {

        let tasksForTodolist = tasks[tdl.id]

        if (tdl.filter === 'active') {
          tasksForTodolist = tasks[tdl.id].filter(t => !t.isDone)
        }
        if (tdl.filter === 'completed') {
          tasksForTodolist = tasks[tdl.id].filter(t => t.isDone)
        }

        return (
          <Todolist
            key={tdl.id}
            todoListId={tdl.id}
            title={tdl.title}
            filter={tdl.filter}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            removeTodoList={removeTodoList}
          />
        )
      })}
    </div>
  )
}

export default App