import { Action } from "@ngrx/store";

export const ADD = "[Constants] Add";

export class retrieveData implements Action {
  readonly type = ADD;

  constructor(public payload: []) {}
}


export type Actions = retrieveData;
