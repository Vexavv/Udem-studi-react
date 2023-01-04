import { NavLink} from "react-router-dom";


function Menu(props) {
    return (
        <nav>
            <NavLink to="." >Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="courses">Courses</NavLink>
            <NavLink to="contacts">Contacts</NavLink>

        </nav>
    );
}

export default Menu;