import React from "react"
import { HabitType } from "../types/HabitType"

interface HabitItemProps {
  habit: HabitType
  removeHabit: (id: string) => void
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, removeHabit }) => {
  const { id, name, count } = habit

  return (
    <li id={id}>
      {name} = Completed {count} times
      <button onClick={() => removeHabit(id)}>Remove</button>
    </li>
  )
}

export default HabitItem
