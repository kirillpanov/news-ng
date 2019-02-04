import { SourceEffects } from "./source.effects";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

export const appEffects: Array<any> = [SourceEffects];
