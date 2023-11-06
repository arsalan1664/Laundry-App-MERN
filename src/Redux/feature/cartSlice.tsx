import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  item: string;
  title: string;
  image: string;
  count: number;
  color: string;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add (state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
    
      if (!existingItem) {
        state.items.push(newItem);
      }


    },
    increment(state,action) {
      const selectItem = state.items.find(item => item.id === action.payload.id);
      selectItem.count += 1
    },
    decrement(state,action) {
      const selectItem = state.items.find(item => item.id === action.payload.id);
      if(selectItem.count > 1 ){
      selectItem.count -= 1}

      
    },
    remove: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
      
    }
  }
});

// Action creators with defined payload types
export const { add, remove, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;


