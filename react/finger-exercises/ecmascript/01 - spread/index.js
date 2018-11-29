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

export function copy() {

}
