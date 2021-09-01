import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
/** components */
import Backdrop from './components/Backdrop'
import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'
/** components-screens */
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={CartScreen} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
