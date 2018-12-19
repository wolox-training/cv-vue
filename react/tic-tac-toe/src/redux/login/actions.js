import LoginService  from 'services/LoginService';
import api from 'config/api'
import actionsGeneral from '../general/actions';

export const actions = {
  GET_TOKEN: '@@LOGIN/GET_TOKEN',
  GET_TOKEN_SUCCESS: '@@LOGIN/GET_TOKEN_SUCCESS',
  GET_TOKEN_FAILURE: '@@LOGIN/GET_TOKEN_FAILURE'
}

const privateActionCreators = {
  getTokenSuccess: values => ({
    type: actions.GET_TOKEN_SUCCESS,
    payload: values
  }),
  getTokenError: error => ({
    type: actions.GET_TOKEN_SUCCESS,
    payload: error
  })
};

const actionsCreators = {
  getToken: (body) => async dispatch => {
    dispatch({ type: actions.GET_TOKEN });
    const response = await LoginService.getToken(body);
    if (response.ok) {
      localStorage.setItem('token', response.data.id);
      api.setHeader('Authorization', response.data.id)
      const dataToState = {
        idUser: response.data.userId,
        email: body.email
      }
      dispatch(privateActionCreators.getTokenSuccess(dataToState))
    } else {
      localStorage.clear();
      dispatch(privateActionCreators.getTokenError(response.problem));
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
