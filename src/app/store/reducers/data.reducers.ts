import { Constants } from "../../models/constant.model";
import * as Data from "./../actions/data.actions";

const initialState: Constants = {
  currentData: []
};

export function reducer(state: Constants[] = [initialState], action: Data.Actions) {
  switch (action.type) {
    case Data.ADD:
      return action.payload;
    default:
      return state;
  }
}
