// @flow

// $FlowIssue
import isNil from 'lodash/isNil';
import get from 'lodash/get';
//import defaultTheme from '../themes/default.js';
import Theme from '../../app/theme/';


/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('btncolor', 'red')};
 * `
 */
const themeProp = (type, path) => (props = {}) => {
  // if (isNil(path)) {
  //   throw 'path cannot be null'
  // };

  let val;

  if (!isNil(type)) {
    val = get(props.theme, type + '.' + path, null);
  }

  if (val == null) {
    val = get(props.theme, path, null);
  }

  if (val == null) {
    val = get(Theme, path);
  }

  //console.log(type+' > ' + path + ' = '+val);
  return val;
}
export default themeProp;
