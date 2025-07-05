import React from "react"
import HabitItem from "./HabitItem"
import { HabitType } from "../types/HabitType"

interface HabitListProps {
  habits: HabitType[]
  removeHabit: (id: string) => void
  incrementHabit: (id: string) => void
}

const HabitList: React.FC<HabitListProps> = ({
  habits,
  removeHabit,
  incrementHabit
}) => {
  return (
    <ul>
      {habits.map((habit) => {
        return (
          <HabitItem
            incrementHabit={incrementHabit}
            removeHabit={removeHabit}
            key={habit.id}
            habit={habit}
          />
        )
      })}
    </ul>
  )
}

export default HabitList
