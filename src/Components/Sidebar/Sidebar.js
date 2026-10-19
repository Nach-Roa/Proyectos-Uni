import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className = "sidebar">
            <nav>
                <NavLink to="/" end>▦ &nbsp; Dashboard</NavLink>
                <NavLink to="/">▣ &nbsp; Productos</NavLink>
                <NavLink to="/">♙ &nbsp; Clientes</NavLink>
                <NavLink to="/reportes">▥ &nbsp; Reportes</NavLink>
                <NavLink to="/configuracion">⚙ &nbsp; Configuración</NavLink>
            </nav>
        </div>
    );
}
export default Sidebar;
