export const actions = {
  GET_STATUS: '@@APP/GET_STATUS',
  CHANGE_STATUS: '@@APP/CHANGE_STATUS'
}

const actionsCreators = {
  getStatus: () => ({
    type: actions.GET_STATUS
  }),
  changeStatus: (value) => ({
    type: actions.CHANGE_STATUS,
    payload: value
  })
};

export default actionsCreators;
