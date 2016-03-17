export const SOME_ACTION = 'SOME_ACTION';

function receiveEntity() {
  return {
    type: SOME_ACTION,
    receivedAt: Date.now()
  };
}

export function fetchEntity() {
  return dispatch => {
    // Return promise if available
    return setTimeout(() => {
      dispatch(receiveEntity());
    }, 1000);
  };
}
