import Bighome from "./complet/bighome";
import Footer from "./complet/footer";
import Header from "./complet/header";
import Payment from "./complet/payment";
import Shipping from "./complet/Shipping";

import Swipers from "./complet/swipers";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1280px] m-auto">
        <Bighome />
        <Swipers />
        <Payment />
        <Shipping />
      </div>
      <Footer />
    </>
  );
}

export default App;
