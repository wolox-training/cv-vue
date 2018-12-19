export function onChange(selector = (action, state) => action.payload) {
  return (state, action) => ({
    ...state,
    [action.target]: selector(action, state)
  });
}

export function onLoading(selector = (action, state) => true) {
  return (state, action) => ({ ...state, [`${action.target}Loading`]: selector(action, state) });
}
