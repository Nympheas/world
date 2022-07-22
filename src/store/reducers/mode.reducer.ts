import {
    ModeUnionType,
    CHANGE_MODE
  } from "../actions/mode.actions"
  
  export interface ModeState {
    mode: string
  }
  
  const initialState: ModeState = {
    mode: 'dark'
  }
  
  export default function countryReducer(
    state = initialState,
    action: ModeUnionType
  ) {
    switch (action.type) {
      case CHANGE_MODE:
        return {
          ...state
        }
      default: 
        return state
    }
  }
  