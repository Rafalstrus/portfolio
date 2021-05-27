import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

/*const LightTheme = React.lazy(() => import('../css/root-light.css'));
const DarkTheme = React.lazy(() => import('../css/root-dark.css'));
tu trzeba wymyślić
*/
export const ColorChange = props =>(
    <div>
        <button onClick = {e =>{
            props.colorChange((props.colorMode==="dark") ? "light" : "dark")
            cookies.set('colorMode',(props.colorMode==="dark") ? "light" : "dark")
        }
        }>{props.colorMode}</button>
        
    </div>
)