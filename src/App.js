import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import SuccessLogin from "./components/SuccessLogin";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login/success" element={<SuccessLogin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
