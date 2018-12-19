import api from 'config/api';
import actionsGeneral from 'redux/general/actions';

export const tokenExist = ({dispatch}) => {
  const token = localStorage.getItem("token");
  dispatch(actionsGeneral.changeStatus(!!token));
  if(!!token)
    api.setHeader(token)
}
