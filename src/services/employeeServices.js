import api from "../api/api.js"
export const getEmployees = async () => {
  try {
    const {
      data: { data },
    } = await api.get("/employees")
    console.log("data response", data)
    return [data, ""]
  } catch (error) {
    console.log(error)
    return [null, "Wasn't possible to get the employees"]
  }
}
