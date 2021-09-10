import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  item: any[];
}

const initialState: CounterState = {
  item: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {},
    removeFromBasket: (state, action: PayloadAction<any>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
