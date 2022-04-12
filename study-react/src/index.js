import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContents from "./components/MainContents"

function Page() {
  return (
    <div>
      <Header /> 
        <MainContents />
      <Footer />
    </div>
  )
}

ReactDom.render(<Page />, document.getElementById("root"));