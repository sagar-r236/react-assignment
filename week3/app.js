import React from "react";
import ReactDom from "react-dom/client";



const Header = () => {
    return(

            <h1>Some Heading</h1>

    )
}



const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Header />)