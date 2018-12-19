import LoginService  from 'services/LoginService';
import api from 'config/api'
import actionsGeneral from '../general/actions';

export const actions = {
  GET_TOKEN: '@@LOGIN/GET_TOKEN',
  GET_TOKEN_SUCCESS: '@@LOGIN/GET_TOKEN_SUCCESS',
  GET_TOKEN_FAILURE: '@@LOGIN/GET_TOKEN_FAILURE'
}

const actionsCreators = {
  getToken: (body) => async dispatch => {
    const response = await LoginService.getToken(body);
    if (response.ok) {
      localStorage.setItem('token', response.data.id);
      api.setHeader('Authorization', response.data.id)
      const dataToState = {
        idUser: response.data.userId,
        email: body.email
      }
      dispatch({
        type: actions.GET_TOKEN_SUCCESS,
        payload: dataToState
      });
    } else {
      localStorage.clear();
      dispatch({
        type: actions.GET_TOKEN_FAILURE,
        payload: response.problem
      });
    }
    dispatch(actionsGeneral.changeStatus(!!response.ok))
  },
  deleteToken: (response) => ({
    type: actions.GET_TOKEN_SUCCESS,
    payload: response
  }),
  requestFailre: (error) => ({
    type: actions.GET_TOKEN_FAILURE,
    payload: error
  })
}

export default actionsCreators;
