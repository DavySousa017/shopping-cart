import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import Provider from "./context/Provider";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Provider>
      <Header/>
      <ProductSection/>
      </Provider>
    </main>
  );
}
