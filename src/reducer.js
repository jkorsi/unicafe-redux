const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) =>
{
  console.log(action)
  console.log("Type is:", action.type)
  switch (action.type)
  {
    case 'GOOD':
      console.log("State:", state)
      return {
        ...state,
        good: state.good + 1
      }
    case 'OK':
      return {
        ...state,
        ok: state.ok + 1
      }
    case 'BAD':
      return {
        ...state,
        bad: state.bad + 1
      }
    case 'ZERO':
      return initialState
    default: return state
  }

}

export default counterReducer