import { useNavigate } from "react-router-dom"

export const APart2 = () => {
  const navigate = useNavigate()

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "15px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 15px 0 15px", width: "100%" }}>
        <button className="angular-button"
                onClick={() => navigate("/framework/angular/part1", { replace: true })}>Назад
        </button>
        <button className="angular-button"
                onClick={() => navigate("/framework/angular/part3", { replace: true })}>Вперед
        </button>
      </div>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
           className="vue-label">
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>

          <ul>
            <li className="li">Angular используется вместе с Typescript.</li>
            <li className="li">Angular-language-service — возможности и автозаполнение шаблона
              HTML-компонента.
            </li>
            <li className="li">Новые функции, такие как generation Angular.
            </li>
          </ul>

          <div style={{ width: "100%" }}>
            <h3 style={{color: "#000000"}}>Преимущества</h3>
            <img
              style={{ width: "120px", height: "120px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            />
          </div>

          <ul>
            <li className="li">Подробная документация.
            </li>
            <li className="li">MVVM (Model-View-ViewModel)
            </li>
            <li className="li">Структура и архитектура, специально созданные для большой масштабируемости проекта.</li>
          </ul>

        </div>
      </div>
    </div>
  )
}