import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import Provider from "./context/Provider";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Provider>
      <Header/>
      <ProductSection/>
      <Cart/>
      </Provider>
      <ToastContainer />
    </main>
  );
}
