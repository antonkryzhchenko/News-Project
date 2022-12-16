import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";
import ToReadPage from "./pages/ToReadPage";

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/news/:id' element={<ItemPage />} />
            <Route path='/read' element={<ToReadPage />} />
        </Routes>
    )
}
export default App;