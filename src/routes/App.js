import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"

import Home from "./Home"
import Detail from "./Detail"
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}/>
        
      
      <Route path="/" element={<Home/>} />
        
      
    </Routes>
  </Router>
  )
}
export default App;
