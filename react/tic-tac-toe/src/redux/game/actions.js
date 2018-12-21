import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ADD_STEP', 'JUMP_TO'], '@@GAME');

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
