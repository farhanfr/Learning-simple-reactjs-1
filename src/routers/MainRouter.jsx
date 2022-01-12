import {
    Switch, Route
} from "react-router-dom";
import { About, Home, FormCreateData, DetailTodo} from '../pages';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/createdata" component={FormCreateData} />
            <Route path="/todo/:id" component={DetailTodo} />
        </Switch>
    )
}

export default MainRouter;
