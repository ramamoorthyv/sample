import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";
import Login from "./Login"
import Menu from "./Common/Menu"
import './App.css';
import 'antd/dist/antd.css';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;


