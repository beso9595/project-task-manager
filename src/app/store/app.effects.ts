import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {tap} from "rxjs";
import {menuSetValue} from "./app.actions";

export const setIsExpanded = createEffect(
    () => {
        return inject(Actions).pipe(
            ofType(menuSetValue),
            tap((value: {isExpanded: boolean}) => {
                localStorage.setItem("isExpanded", value.isExpanded.toString());
            })
        );
    },
    { functional: true, dispatch: false }
);
