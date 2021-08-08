import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../sotre/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector