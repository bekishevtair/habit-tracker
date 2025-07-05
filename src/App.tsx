import "./App.css"
import HabitForm from "./components/HabitForm"
import HabitList from "./components/HabitList"
import HabitItem from "./components/HabitItem"
import { useState, useEffect } from "react"
import { HabitType } from "./types/HabitType"
function App() {
  const [habits, setHabits] = useState<HabitType[]>([])
  const addHabit = (name: string) => {
    setHabits((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name,
        count: 0
      }
    ])
  }
  const removeHabit = (id: string) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id))
  }

  const incrementHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, count: habit.count + 1 } : habit
      )
    )
  }

  useEffect(() => {
    const storedHabits = localStorage.getItem("habits")
    if (storedHabits) {
      console.log(storedHabits)
      setHabits((prev) => [...prev, ...JSON.parse(storedHabits)])
    }
  }, [])
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
