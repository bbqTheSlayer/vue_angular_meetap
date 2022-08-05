import * as React from "react"

export type SC = React.CSSProperties

export interface IButtonStyle {
  primary: SC
  error: SC
}

export interface IButtonSize {
  small: SC
  medium: SC
  large: SC
}
