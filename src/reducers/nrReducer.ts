import {
  DECREASE,
  INCREASE,
  NrDispatchTypes,
} from "./../actions/nrActionsTypes";
interface NrState {
  nr: number;
}

const initNrState: NrState = {
  nr: 0,
};

const nrReducer = (
  state: NrState = initNrState,
  action: NrDispatchTypes
): NrState => {
  switch (action.type) {
    case INCREASE:
      return {
        nr: (state.nr += action.payload ? action.payload : 1),
      };
    case DECREASE:
      return {
        nr: (state.nr -= action.payload ? action.payload : 1),
      };
    default:
      return state;
  }
};

export default nrReducer;
