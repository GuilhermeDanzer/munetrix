import React from "react"
import ReactDOM from "react-dom"
import "../src/styles/index.css"
import Home from "./screens/Home"

import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import GlobalStyle from "./styles/global"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
