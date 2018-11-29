import { isArray } from './utils';

export function min(...args) {
  if(args && isArray(...args)){
  const [newArgs] = args
    return Math.min(...newArgs);
  } else 
    return Math.min(...args)
}

export function copy() {

}
