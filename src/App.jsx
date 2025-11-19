import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

function App() {

  const[category,setcategory]=useState("general");


  return (
    <>
   <Navbar setcategory={setcategory}/> {/* setcategory is a prop that is passed to the Navbar component which is used to change the category of news */}
   <NewsBoard category={category}/> {/* category is a prop that is passed to the NewsBoard component which is used to fetch news from the API  */}
    </>
  )
}

export default App
