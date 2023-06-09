/* -- Config -- */
type ConfigContextMemo = {
  config: ConfigContextState
  dispatch: React.Dispatch<{
    type: ConfigActionTypes
    payload?: any
  }>
}

type ConfigActionTypes =
  | 'SET_DARKMODE'
  | 'SET_CONTRASTCOLOR'
  | 'SET_FONTSIZE'
  | 'SET_NOTIFICATION'
  | 'PRELOAD'

interface ConfigContextPayload {
  darkMode?: boolean
  fontSize?: number
  contrastColor?: string
  notifications?: boolean
}

interface ConfigContextState {
  darkMode: boolean
  fontSize: number
  contrastColor: string
  notifications: boolean
}

/* -- Session -- */
type SessionContextMemo = {
  session: SessionContextState
  dispatch: React.Dispatch<{
    type: SessionActionType
    payload?: any
  }>
}

type SessionActionType = 'UPDATE_SESSION' | 'PRELOAD'

interface SessionPayload {
  _id?: string
  firstName?: string
  lastName?: string
  bio?: string
  relativePhoto?: string
}

interface SessionContextState {
  _id: string
  firstName: string
  lastName: string
  bio: string
  relativePhoto: string
}
