import { Provider } from "react-redux";
import store from "./redux/store";
import "antd/dist/antd.css";
import ProductList from "./components/Product/ProductList";
import Routers from "./Routers";

function App() {
  return (
    <Provider store={store}>
      {/* <ProductList /> */}
      <Routers />
    </Provider>
  );
}

export default App;
