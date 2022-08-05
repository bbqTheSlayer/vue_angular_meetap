import axios from "axios"
import { useEffect } from "react"
import { ITestObject } from "../components/card/state"

export const useGetTest = (
  start: boolean,
  setter: (list: ITestObject[]) => void,
  callback: () => void
) => {
  useEffect(() => {
    start && axios("https://fakestoreapi.com/products", { method: "GET" })
      .then((res) => setter(res.data))
      .finally(() => callback())
  })
}
