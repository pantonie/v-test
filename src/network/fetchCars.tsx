import { ICarDetails } from 'src/types';
import cars from 'public/api/cars.json';

export const fetchCarDetails = (): Array<ICarDetails> => {
  return cars;
}