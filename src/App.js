import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Homepage, Error, Capsules, Rockets} from "./pages"
import {Header} from "./components"


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/capsules" element={<Capsules/>}/>
        <Route path="/rockets" element={<Rockets/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
