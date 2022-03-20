import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';


export const LanguageChange = () =>{

    const { t, i18n } = useTranslation('app');

    return (
        <Select
        value={i18n.language}
        onChange={(event: any) => i18n.changeLanguage(event.target.value)}
      >
        <MenuItem value={'pl'}>{t('language.pl')}</MenuItem>
        <MenuItem value={'en'}>{t('language.en')}</MenuItem>
        {/* <MenuItem value={'es'}>Thirty</MenuItem> */}
      </Select>
    )
}
//     <Select name = "langs" id="search-Langs" onChange={e =>{
//         props.languageCodeChange(e.target.value) 
//     }} defaultValue = {props.currentLang}>
//     <option key ={'currentLang'}>
//             {props.currentLang}
//     </option>
//      {/* {props.lang.map(
//         (data) =>
//         (props.currentLang!==data.languageSymbol) ?
//         <option key ={data.languageSymbol} >
//             {data.languageSymbol}
//             </option> 
//         : ""

//      )} */}
//         </select>
// )