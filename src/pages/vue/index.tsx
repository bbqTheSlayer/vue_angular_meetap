import { Outlet } from "react-router-dom"
import "./index.scss"
export const Vue = () => {
  return (
    <div style={{height: "100vh", width: "100vw"}}>
      <Outlet />
    </div>
  )
}