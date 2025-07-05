import "./App.css"
import HabitForm from "./components/HabitForm"
import HabitList from "./components/HabitList"
import HabitItem from "./components/HabitItem"
import { useState } from "react"
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
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <div className="row">
            <h1>Hello Habit tracker</h1>
            <HabitForm onSubmit={addHabit} />
            <HabitList habits={habits} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
