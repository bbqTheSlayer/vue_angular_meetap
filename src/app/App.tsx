import { Route, Routes, Navigate } from "react-router-dom"
import { Layout } from "../components/layout"
import { Framework, Vue } from "../pages"

import { AppRoute } from "../assets/routes/routes"
import { Part1 } from "../pages/vue/parts/part1"
import { Part2 } from "../pages/vue/parts/part2"
import { Part3 } from "../pages/vue/parts/part3"
import { Part4 } from "../pages/vue/parts/part4"
import { Part5 } from "../pages/vue/parts/part5"
import { APart1 } from "../pages/angular/parts/part1"
import { APart2 } from "../pages/angular/parts/part2"
import { APart3 } from "../pages/angular/parts/part3"
import { APart4 } from "../pages/angular/parts/part4"
import { APart5 } from "../pages/angular/parts/part5"
import { Angular } from "../pages/angular"


function App() {
  return (
    <Routes>
      <Route path={AppRoute.MAIN} element={<Layout />}>
        <Route path={AppRoute.FRAMEWORK} element={<Framework />} />
        <Route path={`${AppRoute.FRAMEWORK}/${AppRoute.VUE}`} element={<Vue />}>
          <Route path={"part1"} element={<Part1 />} />
          <Route path={"part2"} element={<Part2 />} />
          <Route path={"part3"} element={<Part3 />} />
          <Route path={"part4"} element={<Part4 />} />
          <Route path={"part5"} element={<Part5 />} />
        </Route>
        <Route path={`${AppRoute.FRAMEWORK}/${AppRoute.ANGULAR}`} element={<Angular />}>
          <Route path={"part1"} element={<APart1 />} />
          <Route path={"part2"} element={<APart2 />} />
          <Route path={"part3"} element={<APart3 />} />
          <Route path={"part4"} element={<APart4 />} />
          <Route path={"part5"} element={<APart5 />} />
        </Route>
      </Route>
      <Route index element={<Navigate to={AppRoute.FRAMEWORK} />} />
    </Routes>
  )
}

export default App