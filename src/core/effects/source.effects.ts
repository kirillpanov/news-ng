import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

@Injectable()
export class SourceEffects {
    constructor(private actions$: Actions) {}
}
