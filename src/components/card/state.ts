export interface ITestObject {
  title: string
  image: string
  description: string
}

export const initialState = {
  list: [] as ITestObject[],

  setList(list: ITestObject[]) {
    this.list = list
  },

  loading: false,

  setLoading() {
    this.loading = !this.loading
  }
}