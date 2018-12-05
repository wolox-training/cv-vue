export const actions = {
  TOGGLE_STATE: '@@SHOPPING/TOGGLE'
};

const actionsCreators = {
  toggleState: () => ({
    type: actions.TOGGLE_STATE
  })
};

export default actionsCreators;
