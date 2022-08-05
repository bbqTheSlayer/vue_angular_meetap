import { useNavigate } from "react-router-dom"
import React from "react"

export const APart1 = () => {
  const navigate = useNavigate()

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "15px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", justifyContent: "end", margin: "15px 15px 0 15px", width: "100%" }}>
        <button className="angular-button"
                onClick={() => navigate("/framework/angular/part2", { replace: true })}>Вперед
        </button>
      </div>
      <div style={{
        width: "70%",
        display: "flex",
        flexWrap: "wrap",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
           className="vue-label"
      >
        <div style={{ width: "350px", fontWeight: 900 }}>
          <h3>Angular</h3>
          <p>Angular — это супергероическая среда JavaScript MVVM, основанная в 2009 году, которая отлично подходит для
            создания интерактивных веб-приложений.</p>
        </div>
        <img
          style={{ width: "350px", height: "300px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
        />
      </div>
      <div style={{ display: "flex", width: "100%", marginTop: "10%" }}>
        <div style={{ backgroundColor: "#1976d2", borderRadius: "10px", color: "#ffffff", margin: "10px"}}>
          <h3>РАЗРАБОТКА НА ВСЕХ ПЛАТФОРМАХ</h3>
        </div>
        <div style={{ backgroundColor: "#1976d2", borderRadius: "10px", color: "#ffffff", margin: "10px"}}>
          <h3>СКОРОСТЬ И ПРОИЗВОДИТЕЛЬНОСТЬ</h3>
        </div>
        <div style={{ backgroundColor: "#1976d2", borderRadius: "10px", color: "#ffffff", margin: "10px"}}>
          <h3>НЕВЕРОЯТНЫЙ ИНСТРУМЕНТ</h3>
        </div>
        <div style={{ backgroundColor: "#1976d2", borderRadius: "10px", color: "#ffffff", margin: "10px"}}>
          <h3>ЛЮБИМЫЙ МИЛЛИОНАМИ
          </h3>
        </div>
      </div>
    </div>
  )
}