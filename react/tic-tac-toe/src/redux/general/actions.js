import { createTypes } from 'redux-recompose';

export const actions = createTypes(['CHANGE_STATUS'], '@@APP');

const actionsCreators = {
  changeStatus: (value) => ({
    type: actions.CHANGE_STATUS,
    payload: value,
    target: 'isLogged'
  })
};

export default actionsCreators;
