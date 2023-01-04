import {Outlet} from "react-router-dom";
import Menu from "../components/Menu";


function MainLayout(props) {
    return (
<>
    <Menu/>
    <Outlet/>
</>

    );
}

export default MainLayout;