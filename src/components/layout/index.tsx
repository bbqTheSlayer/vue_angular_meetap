import { Outlet } from "react-router-dom"
import "./layout.scss"

export const Layout = () => {
    return (
        <div className="App-body">
            <Outlet />
        </div>
    )
}