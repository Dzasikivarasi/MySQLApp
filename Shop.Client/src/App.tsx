import Main from "./pages/main";
import Product from "./pages/product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products-list";
import NotFound from "./pages/404";
import { Provider } from "react-redux";
import { store } from "./app/store";


export default function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="main">
          <div className="container">
            <Routes>
              <Route index element={<Main />} />
              <Route path="/products-list" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </Provider>
  )
}
