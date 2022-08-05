import React from "react"
import { observer, useLocalObservable } from "mobx-react-lite"

import { useGetTest } from "../../hooks/useGetTest"
import { CardList } from "./atoms"
import { initialState } from "./state"
import { Button } from "../base/button"
import { ButtonStyle, ButtonSize } from "../base/button/style"

export const Card = observer(() => {
  const state = useLocalObservable(() => initialState)
  useGetTest(state.loading, state.setList, () => state.setLoading())

  return (
    <>
      <div style={{margin: "auto"}}>
        <Button onClick={() => state.setLoading()} title={"Download"} style={ButtonStyle.primary} size={ButtonSize.large} />
        <Button onClick={() => state.setLoading()} title={"Error"} style={ButtonStyle.error} />
      </div>

      <div style={{display: "flex", flexWrap: "wrap", margin: "auto", justifyContent: "center"}}>
        <CardList list={state.list} />
      </div>
    </>
  )
})