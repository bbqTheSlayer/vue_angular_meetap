import { IButtonSize, IButtonStyle, SC } from "./type"

const BaseButtonStyle: SC = {
  borderRadius: "10px",
  padding: "10px",
  width: "100%",
  fontSize: "20px",
  fontWeight: "600",
  color: "#ffffff",
  border: "none",
  cursor: "pointer"
}

export const ButtonSize: IButtonSize = {
  small: {
    padding: "5px",
    fontSize: "14px",
  },
  medium: {
    padding: "10px",
    fontSize: "20px",
  },
  large: {
    padding: "20px",
    fontSize: "28px",
  }
}

export const ButtonStyle: IButtonStyle = {
  primary: {
    backgroundColor: "#1976d2",
    ...BaseButtonStyle
  },
  error: {
    backgroundColor: "#d93838",
    ...BaseButtonStyle
  }
}
