import React from "react"
import { useState } from "react"
interface HabitFormProps {
  onSubmit: (e: any) => void
}
const HabitForm: React.FC<HabitFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("")
  const [isBtnDisabled, setBtnDisabled] = useState(true)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(value.trim())
    setValue("")
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      action="">
      <div className="form__row">
        <input
          type="text"
          value={value}
          placeholder="Your habit"
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </div>
      <div className="form__row">
        <button>Add habit</button>
      </div>
    </form>
  )
}

export default HabitForm
