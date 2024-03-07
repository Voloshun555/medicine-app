import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { medicineReducer } from "./medicine/medecineSlice";
import { filterReducer } from "./filter/filterSlice";
import { shopReducer } from "./shop/shopSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["shop"],
};

const rootReducer = combineReducers({
    medicine: medicineReducer,
    filter: filterReducer,
    shop: shopReducer
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistUsersReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector