import { observer } from "mobx-react-lite"
import { ITestObject } from "./state"

const container = {
  minHeight: "500px",
  width: "400px",
  backgroundColor: "#282c34",
  borderRadius: "10px",
  color: "#ffff",
  padding: "5px",
  margin: "20px",
  boxShadow: "0px 10px 10px #000000"
}

export const CardList = observer<{list: ITestObject[]}>(({ list }) => {
  return (
    <>
      {list.map((item, i) => {
        return (
          <div key={i} style={container}>
            <h4>{item.title}</h4>
            <img style={{height: "200px"}} src={item.image} alt="image" />
            <p style={{fontSize: "14px"}}>{item.description}</p>
          </div>
        )
      })}
    </>
  )
})