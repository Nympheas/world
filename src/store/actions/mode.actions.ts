export const CHANGE_MODE = "CHANGE_MODE"

export interface ChangeModeAction {
  type: typeof CHANGE_MODE
  mode: string
}

export const changeMode = (mode: string): ChangeModeAction => ({
  type: CHANGE_MODE,
  mode
})

export type ModeUnionType =
  | ChangeModeAction