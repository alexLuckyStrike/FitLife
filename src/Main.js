import React from "react";
import{
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Home/Home";
import Nutrition from "./Nutrition/Nutrition";
import Metabolize from "./Metabolize/Metabolize";
import Exercise from "./Exercise/Exercise";


class Main extends React.Component{
    render(){
        return(

        <HashRouter>

            <div className="header">
            <h1>Основы здорового образа жизни</h1>
            </div>
            <div className="menu">
                <ul className="menu-content">
            <li><NavLink exact to="/">Главная</NavLink></li>
            <li><NavLink to="/nutrition">Нутрицевтика</NavLink></li>
            <li><NavLink to="/metabolize">Метаболизм</NavLink></li>
            <li><NavLink to="exercise">Упражнения</NavLink></li>
                </ul>
            </div>
            <div className="content">
            <Route exact path="/" component={Home}></Route>
            <Route path="/nutrition" component={Nutrition}></Route>
            <Route path="/metabolize" component={Metabolize}></Route>
            <Route path="/exercise" component={Exercise}></Route>
        </div>

        </HashRouter>

        )
    }
}


export default Main;