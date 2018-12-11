import LoginService  from '../../services/LoginService';

export const actions = {
  GET_TOKEN: '@@LOGIN/GET_TOKEN',
  GET_TOKEN_SUCCESS: '@@LOGIN/GET_TOKEN_SUCCESS',
  GET_TOKEN_FAILURE: '@@LOGIN/GET_TOKEN_FAILURE'
}

const actionsCreators = {
  getToken: () => async dispatch => {
    const response = await LoginService.getToken();
    if (response.ok) {
      dispatch({
        type: actions.GET_TOKEN_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_TOKEN_FAILURE,
        payload: response.problem
      });
    }
  },
  requestSuccess: (response) => ({
    type: actions.GET_TOKEN_SUCCESS,
    payload: response
  }),
  requestFailre: (error) => ({
    type: actions.GET_TOKEN_FAILURE,
    payload: error
  })
}

export default actionsCreators;
