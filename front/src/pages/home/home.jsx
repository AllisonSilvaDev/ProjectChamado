import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Option from "../../components/option/option";
import './home.css'

export default function Home() {

  return (
    <> 
        <div className="container-home">
            <div className="container-sidebar">
                <Sidebar />
            </div>
            <div className="container-main">
            </div>
        </div>
    </>
  );
}
