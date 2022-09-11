import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageChange = () => {
  const { t, i18n } = useTranslation('app');

  return (
    <Select
      value={(i18n.language)?.substring(0, 2) || i18n.language}
      onChange={(event: any) => i18n.changeLanguage(event.target.value)}
    >
      <MenuItem value={'pl'}>{t('language.pl')}</MenuItem>
      <MenuItem value={'en'}>{t('language.en')}</MenuItem>
      {/* <MenuItem value={'es'}>Thirty</MenuItem> */}
    </Select>
  )
}