import { DATA } from 'constans/users';

export const actions = {
  GET_RESULTS: '@@RESULTS/GET_RESULTS'
}

const actionsCreators = {
  getResults: () => ({
    type: actions.GET_RESULTS,
    payload: DATA
  })
}

export default actionsCreators;
