import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
/** styles */
import './styles.css'
/**redux-store */
import store from './redux/Store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)