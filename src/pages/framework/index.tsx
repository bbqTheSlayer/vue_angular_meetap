import React from "react"
import { useNavigate } from "react-router-dom"
import { AppRoute } from "../../assets/routes/routes"

const style: React.CSSProperties = {
  height: "100vh",
  width: "100vw"
}

const container: React.CSSProperties = {
  position: "absolute",
  zIndex: 1000,
  top: "70%",
  width: "50%",
  height: "30%",
  color: "#ffff",
  textAlign: "center"
}
export const Framework = () => {
  const navigate = useNavigate()
  return (
    <div style={style}>
      <div style={{ ...container, left: 0 }} onClick={() => navigate(AppRoute.VUE + "/part1")}></div>
      <div style={{ ...container, right: 0 }} onClick={() => navigate(AppRoute.ANGULAR + "/part1")}></div>
      <iframe
        src="https://my.spline.design/untitled-3f130e0add4640b4dbec36fd5df5bb2c/"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ zIndex: 100 }}
      />
    </div>
  )
}