import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import Provider from "./context/Provider";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Provider>
      <Header/>
      <ProductSection/>
      <Cart/>
      </Provider>
    </main>
  );
}
