import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';

const Routes = () => {

    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/github" exact>

                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;