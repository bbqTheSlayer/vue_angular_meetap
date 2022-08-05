import { useNavigate } from "react-router-dom"

export const Part1 = () => {
  const navigate = useNavigate()

  return (
    <div style={{display: "flex", justifyContent: "center", margin: "15px", flexWrap: "wrap"}}>
      <div style={{display: "flex", justifyContent: "end", margin: "15px 15px 0 15px", width: "100%"}}>
        <button className="vue-button" onClick={() => navigate("/framework/vue/part2", {replace: true})}>Вперед</button>
      </div>
      <div style={{ width: "70%", display: "flex", flexWrap: "wrap", height: "100%", alignItems: "center", justifyContent: "center"}}
           className="vue-label"
      >
        <div style={{width: "350px"}}>
          <h3>Vue</h3>
          <p>Vue.js — это JavaScript-фреймворк, основанный в 2013 году, который идеально подходит для создания высокоадаптируемых пользовательских интерфейсов и сложных одностраничных приложений.</p>
        </div>
        <img
          style={{width: "350px", height: "300px"}}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
        />
      </div>
      <div style={{display: "flex", width: "100%", marginTop: "10%"}}>
        <div>
          <h3>Доступный</h3>
          <p>Уже владеете HTML, CSS и JavaScript? Освойте короткое руководство — и вперёд!</p>
        </div>
        <div>
          <h3>Гибкий</h3>
          <p>Постепенно внедряемая экосистема, которая масштабируется от библиотеки до полнофункционального фреймворка.</p>
        </div>
        <div>
          <h3>Производительный</h3>
          <p>Всего 20KB (min+gzip)
            Молниеносный виртуальный DOM
            Минимальная необходимость в оптимизации</p>
        </div>
      </div>
    </div>
  )
}