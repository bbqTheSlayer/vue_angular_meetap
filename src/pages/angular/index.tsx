import { Outlet } from "react-router-dom"
import "./index.scss"
import React from "react"

export const Angular = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", zIndex: 100 }}>
      <Outlet />
    </div>
  )
}