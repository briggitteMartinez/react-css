import './gallery.css'
import cat from '../img/cat2.jpeg';
import { useState } from 'react';

const Gallery = () => {

    const [columns, setColumns] = useState(2);

    let columnsClass = "gallery";

    if (columns === 1) {
        columnsClass += " one-column"
    }else if( columns === 2) {
        columnsClass += " two-columns"
    }else if ( columns === 3) {
        columnsClass += " three-columns"
    }

    const selectedButtonStyle = {
        fontWeight: "bold"
    }




    return (
        <div className = {columnsClass} >
            <nav>
                <button onClick={() => setColumns(1) } 
                style={columns === 1 ? selectedButtonStyle : null}>One column</button>
                <button onClick={() => setColumns(2) } 
                style={columns === 2 ? selectedButtonStyle : null}>Two columns</button>
                <button onClick={() => setColumns(3) } 
                style={columns === 3 ? selectedButtonStyle : null}>three columns</button>
            </nav>

            <img src={cat} alt="cat "/>

            <img src="img/cat1.jpeg" alt="cat 1"/>
            <img src="img/cat2.jpeg" alt="cat 2"/>
            <img src="img/cat3.jpeg" alt="cat 3"/>
            <img src="img/cat4.jpeg" alt="cat 4"/>
            <img src="img/cat5.jpeg" alt="cat 5"/>
        </div>
        
    )
};

export default Gallery;