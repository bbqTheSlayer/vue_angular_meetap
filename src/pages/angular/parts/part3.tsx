import { useNavigate } from "react-router-dom"

export const APart3 = () => {
  const navigate = useNavigate()

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "15px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 15px 0 15px", width: "100%" }}>
        <button className="angular-button" onClick={() => navigate("/framework/angular/part2", { replace: true })}>Назад
        </button>
        <button className="angular-button"
                onClick={() => navigate("/framework/angular/part4", { replace: true })}>Вперед
        </button>
      </div>
      <div style={{ width: "100%", display: "flex", height: "80vh", alignItems: "center", justifyContent: "center" }}
           className="vue-label">
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>
          <div style={{ width: "100%" }}>
            <img
              style={{ width: "120px", height: "120px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            />
          </div>

          <div style={{ width: "100%", justifyContent: "center", display: "flex", flexWrap: "wrap" }}>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#000000" }}>Недостатки</h3>
            </div>
            <div className="div-container" style={{ width: "350px" }}>
              Разнообразие различных структур (Injectables, Components, Pipes, Modules и т. д.)
            </div>

            <div className="div-container" style={{ width: "350px" }}>
              Относительно медленная производительность, учитывая различные показатели.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}