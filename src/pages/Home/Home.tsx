import React from "react";
import { Outlet } from "react-router-dom";
import style from './Home.module.scss'
class Home extends React.Component {


    render() {
        return (
            <div className={style.container}>
                <Outlet />
            </div>
        )
    }
}

export default Home