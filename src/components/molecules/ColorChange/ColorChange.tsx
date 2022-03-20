import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../store/actions';

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