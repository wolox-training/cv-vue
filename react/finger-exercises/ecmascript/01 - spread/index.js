import { isArray } from './utils';

export function min(...args) {
  if(args.length && isArray(args[0])){
    return Math.min(...args[0]);
  } else if (args.length) {
    return Math.min(...args);
  } 
  return undefined;
}

export function copy(args) {
  return isArray(args) ? [...args] : {...args};
}

export function reverseMerge(arr1, arr2) {
  return [ ...arr2, ...arr1]
}

export function filterAttribs({a, b, ...other }) {
  return other;
}
