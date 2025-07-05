import React from "react"
import { HabitType } from "../types/HabitType"
interface HabitListProps {
  habits: HabitType[]
}
const HabitList: React.FC<HabitListProps> = ({ habits }) => {
  return (
    <ul>
      {habits.map((habit) => {
        return (
          <li key={habit.id}>
            {habit.name} = Completed {habit.count} times
          </li>
        )
      })}
    </ul>
  )
}

export default HabitList
