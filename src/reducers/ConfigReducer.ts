export const initialConfigState = {
  fontSize: 2,
  darkMode: false,
  contrastColor: '#87B00B',
  notifications: false
}

export const configInit = (preloadedState: ConfigContextState) => {
  return {
    ...initialConfigState,
    ...preloadedState
  }
}

export default (
  state: ConfigContextState,
  action: { type: ConfigActionTypes; payload?: any }
): ConfigContextState => {
  switch (action.type) {
    case 'SET_DARKMODE': {
      return {
        ...state,
        darkMode: !state.darkMode
      }
    }
    case 'SET_NOTIFICATION': {
      return {
        ...state,
        notifications: !state.notifications
      }
    }
    case 'SET_CONTRASTCOLOR': {
      return {
        ...state,
        contrastColor: action.payload.contrastColor
      }
    }
    case 'SET_FONTSIZE': {
      return {
        ...state,
        fontSize: action.payload.fontSize
      }
    }
    case 'PRELOAD': {
      return configInit(action.payload)
    }
    default:
      return state
  }
}
