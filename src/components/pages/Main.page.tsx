import { Box } from '@mui/system';
import React from 'react';
import MainTemplate from '../templates/main.template';

function MainPage() {

    return (
        <Box>
            <MainTemplate />
        </Box>
    )
}
export default React.memo(MainPage)