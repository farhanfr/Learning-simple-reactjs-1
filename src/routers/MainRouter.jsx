import {
    Switch, Route
} from "react-router-dom";
import { About, Home, FormCreateData, DetailTodo, FormUpdateData} from '../pages';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/createdata" component={FormCreateData} />
            <Route path="/todo/:id" component={DetailTodo} />
            <Route path="/updatedata" component={FormUpdateData} />
        </Switch>
    )
}

export default MainRouter;
