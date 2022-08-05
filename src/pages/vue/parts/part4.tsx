import { useNavigate } from "react-router-dom"

export const Part4 = () => {
  const navigate = useNavigate()

  return (
    <div style={{display: "flex", justifyContent: "center", margin: "15px", flexWrap: "wrap"}}>
      <div style={{display: "flex", justifyContent: "space-between", margin: "15px 15px 0 15px", width: "100%"}}>
        <button className="vue-button" onClick={() => navigate("/framework/vue/part3", {replace: true})}>Назад</button>
        <button className="vue-button" onClick={() => navigate("/framework/vue/part5", {replace: true})}>Вперед</button>
      </div>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} className="vue-label">
        <div style={{display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center"}}>
          <div style={{width: "100%"}}>
            <img
              style={{width: "120px", height: "100px"}}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            />
          </div>

          <div style={{width: "100%"}}>
            <h3>Как он работает?</h3>
            <img
              src="https://ru.vuejs.org/images/data.png"
            />
          </div>

        </div>
      </div>
    </div>
  )
}