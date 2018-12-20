import LoginService  from 'services/LoginService';
import api from 'config/api'
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import actionsGeneral from '../general/actions';

export const actions = createTypes(completeTypes(['GET_TOKEN']), '@@LOGIN');

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
  getToken: (body) => {
    console.log('Hrtr');
    return {
      type: actions.GET_TOKEN,
      target: 'token',
      service: LoginService.getToken,
      payload: body,
      injections: [
        withPostSuccess((dispatch, response) => {
          console.log(response);
          localStorage.setItem('token', response.data.id);
          api.setHeader('Authorization', response.data.id)
          const dataToState = {
            idUser: response.data.userId,
            email: body.email
          }
          dispatch(privateActionCreators.getTokenSuccess(dataToState));
          dispatch(actionsGeneral.changeStatus(true));
        }),
        withPostFailure((dispatch, response) => {
          console.log(response);
          localStorage.clear();
          dispatch(privateActionCreators.getTokenError(response.problem));
          dispatch(actionsGeneral.changeStatus(false));
        }),
      ]
      // successSelector: response => response.data.id
    }
    // dispatch({ 
    //   type: actions.GET_TOKEN,
    //   target: 'token'
    //  });
    // const response = await LoginService.getToken(body);
    // if (response.ok) {
    //   localStorage.setItem('token', response.data.id);
    //   api.setHeader('Authorization', response.data.id)
    //   const dataToState = {
    //     idUser: response.data.userId,
    //     email: body.email
    //   }
    //   dispatch(privateActionCreators.getTokenSuccess(dataToState))
    // } else {
    //   localStorage.clear();
    //   dispatch(privateActionCreators.getTokenError(response.problem));
    // }
    // dispatch(actionsGeneral.changeStatus(!!response.ok))
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
