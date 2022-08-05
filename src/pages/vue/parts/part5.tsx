import { useNavigate } from "react-router-dom"
import React from "react"

const style: React.CSSProperties = {
  fontSize: 48,
  fontWeight: 600,
  padding: 40,
  borderRadius: 10,
  width: 400,
  backgroundColor: "#42b983",
  color: "#fff",
  height: 60
}

const style2: React.CSSProperties = {
  borderRadius: 10,
  width: 495,
  border: "5px solid #42b983",
  backgroundColor: "#fff",
  height: 155,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}


export const Part5 = () => {
  const navigate = useNavigate()

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "15px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 15px 0 15px", width: "100%" }}>
        <button className="vue-button" onClick={() => navigate("/framework/vue/part3", { replace: true })}>Назад
        </button>
        <button className="vue-button" onClick={() => navigate("/framework", { replace: true })}>Вперед
        </button>
      </div>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
           className="vue-label">
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center", height: "90vh" }}>
            <div style={style2}>
              <div style={style}>
                Вопросы?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}