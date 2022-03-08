import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/actions';

export const ColorChange = () => {
    const theme = useSelector((state: RootStateOrAny) => state.themeState.value);
    const dispatch = useDispatch();

    return (
        <Box>
            <Button
                onClick={() => {
                    dispatch(changeTheme())
                }}
            >
                {theme}
            </Button>
        </Box>
    )

}
// const colors = {
//     dark:{
//         backgroundColor:"rgb(9,12,16)",
//         headerText: "rgb(201,209,219)",
//         paragrafText:"rgb(139,148,158)",
//         clickableText: "rgb(88,156,255)",
//         sticky: "rgb(22,27,34)",
//         backgroundColorWithOpacity :"rgba(9,12,16,0.5)"
//     },
//     light: {
//         backgroundColor:"rgb(246,243,239)",
//         headerText: "black",
//         paragrafText:"black",
//         clickableText: "rgb(52, 163, 85)",
//         sticky: "rgb(225,222,218)",
//         backgroundColorWithOpacity :"rgba(225,222,218,0.5)"
//     }
// }

// const setColors = props =>{
//     document.body.style.setProperty(
//         "--background",
//         props.backgroundColor
//     )
//     document.body.style.setProperty(
//         "--header-text",
//         props.headerText
//     )
//     document.body.style.setProperty(
//         "--paragraf-text",
//         props.paragrafText
//     )
//     document.body.style.setProperty(
//         "--clickable-text",
//         props.clickableText
//     )
//     document.body.style.setProperty(
//         "--backgroundColorWithOpacity",
//         props.backgroundColorWithOpacity
//     )
//     document.body.style.setProperty(
//         "--sticky",
//         props.sticky
//     )
// }

// export const ColorChange = props =>(
//     <div className ='nav-item2'>
//         <button onClick = {e =>{
//             props.colorChange((props.colorMode==="light") ? "dark" : "light")
//             cookies.set('colorMode',(props.colorMode==="dark") ? "light" : "dark")
//         }
//         }>{(props.colorMode==="light") ? "dark" : "light"}</button>
//         {setColors(colors[props.colorMode])}
//     </div>
// )