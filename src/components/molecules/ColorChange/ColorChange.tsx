import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../store/actions';
import { StoreState } from '../../../store/store';

export const ColorChange = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation('app');
    const theme = useSelector((state: StoreState) => state.themeState.value);

    return (
        <Box>
            <Button
                onClick={() => {
                    dispatch(changeTheme())
                }}
            >
                {t(`theme.${theme}`)}
            </Button>
        </Box>
    )

}