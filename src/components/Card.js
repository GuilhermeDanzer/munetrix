import React from "react"
import { MyCard } from "../styles/cardStyles"
const Card = ({ employee }) => {
  const { employee_name, employee_salary, employee_age } = employee
  const formattedSalary = employee_salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
  return (
    <MyCard>
      <h4>Name: {employee_name}</h4>
      <h4>Salary: {formattedSalary}</h4>
      <h4>Age: {employee_age}</h4>
    </MyCard>
  )
}
export default Card
