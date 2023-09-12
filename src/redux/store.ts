import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { tasks: todoReducer },
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

// export type AppDispatch = typeof store.dispatch;
// type DispatchFunc = () => AppDispatch;
