import { isArray } from './utils';

export function min(args) {
  if(isArray(args))
    return Math.min(...args);
  else 
    return Math.min(args)
}

export function copy() {

}
