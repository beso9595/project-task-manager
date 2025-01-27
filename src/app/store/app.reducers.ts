import {createReducer, on} from "@ngrx/store";
import {menuSetValue} from "./app.actions";
import {initialState} from "./app.state";

export const appReducers = createReducer(
    initialState,
    on(menuSetValue, state => ({ ...state, isExpanded: state.isExpanded })),
);
