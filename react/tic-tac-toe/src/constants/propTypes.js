import { shape, string, number } from 'prop-types';

export const userPropType = shape({
  id: number,
  points: number,
  name: string,
  pg: number,
  wg: number,
  lg: number,
  dw: number
});
