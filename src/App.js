import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";
import ToReadPage from "./pages/ToReadPage";
import NewsList from "./components/news/NewsList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news/:id" element={<ItemPage />} />
        <Route path="/read" element={<ToReadPage />} />
        <Route path="/politics" element={<NewsList />} />
        <Route path="/business" element={<NewsList />} />
        <Route path="/technology" element={<NewsList />} />
        <Route path="/sports" element={<NewsList />} />
        <Route path="/health" element={<NewsList />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
