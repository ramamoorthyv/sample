// eslint-disable-next-line import/no-anonymous-default-export
export default initialState => reducerMap => (state = initialState, action) => {
  if (!action) return state;
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action) : state
}
