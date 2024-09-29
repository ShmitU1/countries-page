import { Header } from "./ui/Header";
import { Section } from "./ui/Section";
import { store } from "./lib/store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Section />
    </Provider>
  );
};

export default App;
