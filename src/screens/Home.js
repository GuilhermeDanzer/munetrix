import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import { getEmployees } from "../services/employeeServices"
import { MyWrapper } from "../styles/wrapperStyles"
const Home = () => {
  const [employees, setEmployees] = useState([])
  const [error, setError] = useState("")

  const handleRequest = async () => {
    const [data, error] = await getEmployees()
    if (data) {
      setEmployees(data)
    } else {
      setError(error)
    }
  }

  useEffect(() => {
    handleRequest()
    return () => {
      setEmployees([])
      setError("")
    }
  }, [])
  return (
    <div>
      <h1 className="center-text">Employees</h1>
      <MyWrapper>
        {employees &&
          employees.map((employee, index) => {
            return <Card key={index} employee={employee} />
          })}
      </MyWrapper>
      {error && <h1 className="center-text">{error}</h1>}
    </div>
  )
}

export default Home
