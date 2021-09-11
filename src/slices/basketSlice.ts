import { RootState } from './../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'typings/amazom';

export interface CounterState {
  items: IProduct[];
  itemQuantity: { [key: number]: number };
}

const initialState: CounterState = {
  items: [],
  itemQuantity: {},
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IProduct>) => {
      //* 이미 존재하는 상품일 경우 수량만 증가시킨다.
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      if (index === -1) {
        //* 장바구니에서 상품 추가
        state.items.push(action.payload);
      }

      //* 해당 상품의 개수 추가
      const id = action.payload.id;

      if (state.itemQuantity[id]) {
        state.itemQuantity[id] += 1;
      } else {
        state.itemQuantity[id] = 1;
      }
    },

    removeFromBasket: (state, action: PayloadAction<number>) => {
      //* 장바구니에서 상품 삭제
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index >= 0) {
        //* 해당 상품 개수 감소
        const id = action.payload;

        if (state.itemQuantity[id]) {
          state.itemQuantity[id] -= 1;
        }

        //* 상품 개수가 0일때 장바구니에서 제거한다.
        if (state.itemQuantity[id] === 0) {
          state.items.splice(index, 1);
        }
      } else {
        // 존재하지 않음
        console.error('존재하지 않는 상품 ID 입니다.');
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors = this is how we pull information from the global store slice
export const selectItems = (state: RootState) => state.basket.items;
export const selectItemQuantity = (state: RootState) => state.basket.itemQuantity;
export const selectTotalPrice = (state: RootState) =>
  state.basket.items.reduce((acc, item) => {
    const price = item.price * state.basket.itemQuantity[item.id];
    return acc + price;
  }, 0);
export const selectTotalQuantity = (state: RootState) =>
  Object.entries(state.basket.itemQuantity).reduce((acc, item) => {
    return acc + item[1];
  }, 0);

export default basketSlice.reducer;
