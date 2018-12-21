import { createTypes } from 'redux-recompose';
import { DATA } from 'constants/users';

export const actions = createTypes(['GET_RESULTS'], '@@RESULTS');

const actionsCreators = {
  getResults: () => ({
    type: actions.GET_RESULTS,
    payload: DATA,
    target: 'positions'
  })
}

export default actionsCreators;
