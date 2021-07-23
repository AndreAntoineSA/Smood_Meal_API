
import { Contact, Navbar, Footer, Meal, MealDetails } from './components'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App()
{
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Meal}></Route>
          <Route path='/meal/:idMeal' exact component={MealDetails}></Route>
          <Route path='/contact' exact component={Contact}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
