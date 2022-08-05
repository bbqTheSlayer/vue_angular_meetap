import { useNavigate } from "react-router-dom"

export const Part2 = () => {
  const navigate = useNavigate()

  return (
    <div style={{display: "flex", justifyContent: "center", margin: "15px", flexWrap: "wrap"}}>
      <div style={{display: "flex", justifyContent: "space-between", margin: "15px 15px 0 15px", width: "100%"}}>
        <button className="vue-button" onClick={() => navigate("/framework/vue/part1", {replace: true})}>Назад</button>
        <button className="vue-button" onClick={() => navigate("/framework/vue/part3", {replace: true})}>Вперед</button>
      </div>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} className="vue-label">
        <div style={{display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center"}}>
          <div style={{width: "100%"}}>
            <img
              style={{width: "120px", height: "100px"}}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            />
            <h3 style={{ color: "#000000"}}>Преимущества</h3>
          </div>

          <ul>
            <li className="li-vue">Потрясающая интеграция.</li>
            <li className="li-vue">Масштабирование.</li>
            <li className="li-vue">Подробная документация.</li>
            <li className="li-vue">Адаптивность.</li>
          </ul>

        </div>
      </div>
    </div>
  )
}