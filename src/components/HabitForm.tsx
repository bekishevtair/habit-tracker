import React from "react"

const HabitForm = () => {
  return (
    <form
      className="form"
      action="">
      <div className="form__row">
        <input
          type="text"
          placeholder="Your habit"
        />
      </div>
      <div className="form__row">
        <button>Add habit</button>
      </div>
    </form>
  )
}

export default HabitForm
