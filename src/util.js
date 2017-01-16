/**
 *  Converts a string to and ArrayBuffer.
 *
 *  @param  {[type]} str [description]
 *  @return {[type]}     [description]
 */
export function stringToArrayBuffer(str) {
  return new Uint16Array(str.split('').map((c) => c.charCodeAt(0))).buffer;
  // let buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  // let bufView = new Uint16Array(buf);
  // for (let i = 0, strLen = str.length; i < strLen; i++) {
  //   bufView[i] = str.charCodeAt(i);
  // }
  // return buf;
}

/**
 *  Convert an array buffer back to strin.
 *
 *  @param  {[type]} buffer [description]
 *  @return {[type]}        [description]
 */
export function arrayBufferToString(buffer) {
  let arr = new Uint8Array(buffer);
  let str = arr.map(String.fromCharCode);
  // let str = String.fromCharCode.apply(String, arr);
  if (/[\u0080-\uffff]/.test(str)) {
    throw new Error('this string seems to contain (still encoded) multibytes');
  }

  return str;
}
