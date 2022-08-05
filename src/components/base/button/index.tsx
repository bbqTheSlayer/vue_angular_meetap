import * as React from "react"
import {ButtonSize, ButtonStyle} from "./style"

interface IButtonProps {
  onClick: () => void
  title: string
  style?: object
  size?: object
}

export const Button: React.FC<IButtonProps> = ({ onClick, title, style, size }) => (
  <button
    onClick={onClick}
    style={{
      ...style || ButtonStyle.primary,
      ...size || ButtonSize.small
    }}
  >
    {title}
  </button>
)