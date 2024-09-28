import Header from './sections/Header'
import Section from "./sections/Section"
import { store } from './app/store'
import { Provider } from'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Section />
    </Provider>
  )
}

export default App