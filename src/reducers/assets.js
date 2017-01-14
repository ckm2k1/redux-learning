import { ADD_ASSET, REMOVE_ASSET, UPDATE_ASSET } from './actions';

function hasDuplicate(asset, assets) {
  return assets.some((a) => {
    return a.domain === asset.domain &&
      a.username === a.asset.username;
  });
}

export function addAsset(asset) {
  return (dispatch, getState) => {
    let currentState = getState();
    if (hasDuplicate(asset, currentState)) {


      dispatch({
        type: ADD_ASSET,
        params: { asset }
      });
    }
  };
}

export function removeAsset(id) {
  return (dispatch, getState) => {
    dispatch({
      type: REMOVE_ASSET,
      params: { id }
    });
  };
}

export function updateAsset(asset) {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_ASSET,
      params: { asset }
    });
  };
}