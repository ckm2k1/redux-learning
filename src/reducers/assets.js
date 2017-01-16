import {ADD_ASSET, REMOVE_ASSET, UPDATE_ASSET} from './actions';

/**
 *  Check if the asset already exists in the
 *  current assets by checking for same domain
 *  and username.
 *
 *  @param  {[type]}  asset  [description]
 *  @param  {[type]}  assets [description]
 *  @return {Boolean}        [description]
 */
function hasDuplicate(asset, assets) {
  return assets.some((a) => {
    return a.domain === asset.domain &&
      a.username === a.asset.username;
  });
}

/**
 *  Add an asset. Automatially encrypts the plain
 *  text password passed in.
 *
 *  @param {[type]} asset [description]
 *  @return {function} [description]
 */
export function addAsset(asset) {
  return (dispatch, getState) => {
    let state = getState();
    let asset = new Asset(asset);

    if (asset.isValid()) {
      if (hasDuplicate(asset, state)) {
        return Promise.reject(new Error('EDA1'));
      }

      asset.encrypt(state.session.crypto.cek);

      dispatch({
        type: ADD_ASSET,
        params: {asset}
      });
    } else {
      return Promise.reject(new Error(asset.validationErrors));
    }
  };
}

/**
 *  Remove an asset.
 *
 *  @param  {[type]} id [description]
 *  @return {[type]}    [description]
 */
export function removeAsset(id) {
  return (dispatch, getState) => {
    let current = getState();

    dispatch({
      type: REMOVE_ASSET,
      params: {id}
    });
  };
}

/**
 *  Update an asset.
 *
 *  @param  {[type]} asset [description]
 *  @return {[type]}       [description]
 */
export function updateAsset(asset) {
  return (dispatch, getState) => {
    let current = getState();

    dispatch({
      type: UPDATE_ASSET,
      params: {asset}
    });
  };
}
