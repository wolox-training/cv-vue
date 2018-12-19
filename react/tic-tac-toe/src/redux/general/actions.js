export const actions = {
  CHANGE_STATUS: '@@APP/CHANGE_STATUS'
}

const actionsCreators = {
  changeStatus: (value) => ({
    type: actions.CHANGE_STATUS,
    payload: value
  })
};

export default actionsCreators;
