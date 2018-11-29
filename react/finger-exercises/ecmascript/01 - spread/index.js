import { isArray } from './utils';

export function min(args) {
  console.log(args, 'argumentos')
  if(isArray(args))
    return Math.min(...args);
  else 
    return Math.min(args)
}

export function copy() {

}
