import {State} from "./app.state";
import {createSelector} from "@ngrx/store";

export const selectIsExpanded = createSelector(
    (state: State) => state.isExpanded,
    (isExpanded) => isExpanded,
);
