import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./user/profileSlice";
import suggestedReducer from "./user/suggestedSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    suggested: suggestedReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
