import { Box, Menu } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { ColorChange } from '../../molecules/ColorChange/ColorChange';
import LanguageChange from '../../molecules/LanguageChange/LanguageChange.component';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.styles.css';
import MenuItem from '@mui/material/MenuItem';
import NavbarNavigation from '../../molecules/navbarNavigation/NavbarNavigation.component';

export default function Navbar() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper id="sticky-container">
            <Box id="sticky-container-wrapper">
                <Box id="settings">
                    <Box>
                        <LanguageChange />
                    </Box>
                    <ColorChange />
                </Box>
                <Box id={'navigation'}>
                    {(isMobile) ? (
                        <React.Fragment>
                            <IconButton
                                edge="start"
                                onClick={handleMenuClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={() => handleMenuClose()}
                                onClick={() => handleMenuClose()}
                            >
                                <NavbarNavigation
                                    NavItemComponent={MenuItem}
                                    onClick={handleMenuClose}
                                />
                            </Menu>
                        </React.Fragment>
                    ) : (
                        <NavbarNavigation />
                    )}
                </Box>
            </Box>
        </Paper>
    )
}
