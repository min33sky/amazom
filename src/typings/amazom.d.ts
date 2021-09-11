/**
 * 상품 타입
 */
export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: number;
  //? 새로 추가한 속성
  hasPrime?: boolean;
  rating?: number;
}
