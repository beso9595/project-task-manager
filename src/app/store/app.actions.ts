import { createAction, props } from '@ngrx/store';

export const menuSetValue = createAction(
    '[Menu] Set Value',
    props<{ isExpanded: boolean; }>()
);
