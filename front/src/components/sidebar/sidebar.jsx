import React from "react";
import Option from "../option/option";
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
            <h3>Sistema Chamado</h3>
        </div>
        <ul className="sidebar-menu">
            <Option />
        </ul>
    </div>
  );
}
