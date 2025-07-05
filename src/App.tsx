import "./App.css"
import HabitForm from "./components/HabitForm"
import HabitList from "./components/HabitList"
import { useState, useEffect, useReducer } from "react"
import { HabitType } from "./types/HabitType"
import habitReducer from "./reducers/habitReducer"
function App() {
  const init = (): HabitType[] => {
    const storedHabits = localStorage.getItem("habits")
    return storedHabits ? JSON.parse(storedHabits) : []
  }
  const [habits, dispatch] = useReducer(habitReducer, [], init)
  const addHabit = (name: string) => {
    dispatch({ type: "ADD_HABIT", payload: name })
  }
  const removeHabit = (id: string) => {
    dispatch({ type: "REMOVE_HABIT", payload: id })
  }

  const incrementHabit = (id: string) => {
    dispatch({ type: "INCREMENT_HABIT", payload: id })
  }

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <div className="row">
            <h1>Hello Habit tracker</h1>
            <HabitForm onSubmit={addHabit} />
            <HabitList
              habits={habits}
              removeHabit={removeHabit}
              incrementHabit={incrementHabit}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
