import { Photo } from './photo';

export interface Item {
  id: number;
  name: string;
  url: string;
  description: string;
  price: number;
  likesCount: number;
  userId: number;
  photos?: Photo[];
}
