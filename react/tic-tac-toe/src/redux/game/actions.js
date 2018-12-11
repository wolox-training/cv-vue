export const actions = {
  ADD_STEP: '@@GAME/ADD_STEP',
  JUMP_TO: '@@GAME/JUMP-TO'
}

const actionsCreators = {
  addStep: values => ({
    type: actions.ADD_STEP,
    payload: values
  }),
  jumpTo: values => ({
    type: actions.JUMP_TO,
    payload: values
  })
};

export default actionsCreators;