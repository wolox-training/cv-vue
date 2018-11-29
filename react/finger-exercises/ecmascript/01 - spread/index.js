import { isArray } from './utils';

export function min(...args) {
  if(args.length && isArray(...args)){
    const [newArgs] = args;
    return Math.min(...newArgs);
  } else if (args.length) {
    return Math.min(...args);
  } else 
    return undefined;
}

export function copy(args) {
  return isArray(args) ? [...args] : {...args};
}

export function reverseMerge(arr1, arr2) {
  return [ ...arr2, ...arr1]
}
