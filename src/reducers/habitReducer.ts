// import { HabitType } from "../types/HabitType"

// type Action =
//   | { type: "ADD_HABIT"; payload: string }
//   | { type: "REMOVE_HABIT"; payload: string }
//   | { type: "INCREMENT_HABIT"; payload: string }
//   | { type: "LOAD_HABITS"; payload: HabitType[] }

// const habitReducer = (state: HabitType[], action: Action): HabitType[] => {
//   switch (action.type) {
//     case "ADD_HABIT":
//       return [
//         ...state,
//         { id: Date.now().toString(), name: action.payload, count: 0 }
//       ]

//     case "REMOVE_HABIT":
//       return state.filter((habit) => habit.id !== action.payload)

//     case "INCREMENT_HABIT":
//       return state.map((habit) =>
//         habit.id === action.payload
//           ? { ...habit, count: habit.count + 1 }
//           : habit
//       )
//     case "LOAD_HABITS":
//       return action.payload
//     default:
//       return state
//   }
// }

// export default habitReducer

import { HabitType } from "../types/HabitType"

type Action =
  | {
      type: "ADD_HABIT"
      payload: string
    }
  | {
      type: "REMOVE_HABIT"
      payload: string
    }
  | {
      type: "INCREMENT_HABIT"
      payload: string
    }
  | {
      type: "LOAD_HABITS"
      payload: HabitType[]
    }

const habitReducers = (state: HabitType[], action: Action): HabitType[] => {
  switch (action.type) {
    case "ADD_HABIT":
      return [
        ...state,
        { id: Date.now().toString(), name: action.payload, count: 0 }
      ]
    case "INCREMENT_HABIT":
      return state.map((habit) =>
        habit.id === action.payload
          ? { ...habit, count: habit.count + 1 }
          : habit
      )

    case "REMOVE_HABIT":
      return state.filter((habit) => habit.id !== action.payload)
    case "LOAD_HABITS":
      return action.payload
    default:
      return state
  }
}

export default habitReducers
