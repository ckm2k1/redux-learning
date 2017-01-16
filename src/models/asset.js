import * as util from '../util';

/**
 *  Asset class. Contains validation
 *  and enc/dec logic.
 */
export default class Asset {
  /**
   *  Saves a clone of all props passed
   *  in.
   *
   *  @param  {[type]} props [description]
   */
  constructor(props) {
      this._props = Object.assign({}, props);
    }
    /**
     *  Validate the asset fields.
     *
     *  @return {Boolean} [description]
     */
  isValid() {
    return this.domain;
  }

  /**
   *  Encrypt the asset's password field.
   *
   *  @param  {[type]} cek [description]
   *  @return {Promise} [description]
   */
  encrypt(cek) {
    this._props.password = this._props.password;
    let algo = {
      name: 'AES-CTR',
      counter: new Uint8Array(16),
      length: 128
    };

    return window.crypto.subtle.encrypt(algo, cek, util.stringToArrayBuffer(this._props.password))
      .then((encrypted) => {
        console.log(new Uint8Array(encrypted));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  /**
   *  Decrypt the password and return
   *  the plain text. The model will not
   *  save the decrypted value making it
   *  temporary.
   *
   *  @param  {[type]} cek [description]
   *  @return {[type]}     [description]
   */
  decrypt(cek) {
    return this.password;
  }

  /**
   *  Serialize.
   *
   *  @return {[type]} [description]
   */
  toJSON() {
    return Object.assign({}, this._props);
  }
}