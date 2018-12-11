import LoginService from '../../services/LoginService';

export const actions = {
  GET_TOKEN: '@@LOGIN/GET_TOKEN',
  LOGIN_SUCCESS: '@@LOGIN/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@LOGIN/LOGIN_FAILURE'
}

const actionsCreators = {
  getToken: () => async dispatch => {
    const response = await LoginService.getToken() 
  }
}
