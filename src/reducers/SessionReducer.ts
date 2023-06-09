export const initialSessionState = {
  _id: '0e060ec4-03bc-11ee-be56-0242ac120002',
  firstName: 'Stranger',
  lastName: '',
  bio: '',
  relativePhoto:
    'https://yt3.googleusercontent.com/ytc/AGIKgqODec-G4kIb1fKhUI850znoje_DmmO7B2VrkypYcQ=s900-c-k-c0x00ffffff-no-rj'
}

export const sessionInit = (preloadedState: SessionContextState) => {
  return {
    ...initialSessionState,
    ...preloadedState
  }
}

export default (
  state: SessionContextState,
  action: { type: SessionActionType; payload?: any }
): SessionContextState => {
  switch (action.type) {
    case 'UPDATE_SESSION': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'PRELOAD': {
      return sessionInit(action.payload)
    }
    default:
      return state
  }
}
