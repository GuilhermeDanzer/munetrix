import styled from "styled-components"

export const MyCard = styled.div`
  background-color: ${({ theme }) => theme.colors.pearl};
  width: 250px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 10px;
  align-items: center;
  border-radius: 10px;
  justify-content: space-around;
`
