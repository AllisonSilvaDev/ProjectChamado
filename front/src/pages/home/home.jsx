import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import './home.css'

export default function Home() {

  return (
    <> 
        <div className="container-home">
            <div className="container-sidebar">
                <Sidebar />
            </div>
            <div className="container-main">
                <p>teste</p>
            </div>
        </div>
    </>
  );
}
