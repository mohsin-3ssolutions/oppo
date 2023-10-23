import { Avatar, IconButton, ListItemIcon, Menu, Tooltip, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PaymentIcon from '@mui/icons-material/Payment';

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        setAnchorEl(null);
        localStorage.removeItem('authToken');
        navigate('/signin');
    };
    const handleNavigate = () => {
        setAnchorEl(null);
        navigate('/payment');
    };


    const nameIcon = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data?.fname;
    });

    const profileData = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data;
    });

    if (nameIcon && nameIcon.length > 0) {
        var firstLetter = nameIcon[0].toUpperCase(); // Convert to uppercase
    }

    useEffect(() => {
        const authenticated = !!localStorage.getItem("authToken");
        setIsAuthenticated(authenticated);

    }, [isAuthenticated]);

    console.log(profileData)
    return (
        <header>
            <div className="container">
                <div className="header_nav">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img className="img-fluid" src="/assets/images/logo.png" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navigation" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/our-services">Our Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/our-story">Our Story</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">Contact Us</Link>
                                    </li>
                                    {isAuthenticated && profileData?.role == 'general_contractor' && <li>
                                        <Link to="/account">My Account</Link>
                                    </li>
                                    }
                                    {isAuthenticated && profileData?.role == 'owner' && <li>
                                        <Link to="/owner-account">My Account</Link>
                                    </li>
                                    }
                                    {isAuthenticated && profileData?.role == 'sub_contractor' && <li>
                                        <Link to="/subcontractor-account">My Account</Link>
                                    </li>
                                    }

                                    {!isAuthenticated && <li>
                                        <Link to="/signin">Login</Link>
                                    </li>
                                    }
                                </ul>
                                {isAuthenticated && <div>
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                        <Tooltip title="Account settings">
                                            <IconButton
                                                onClick={handleClick}
                                                size="small"
                                                sx={{ ml: 2 }}
                                                aria-controls={open ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                            >
                                                <Avatar sx={{ width: 32, height: 32 }}>{firstLetter}</Avatar>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <Avatar fontSize="small" />
                                            </ListItemIcon>
                                            Profile
                                        </MenuItem>

                                        <MenuItem onClick={handleNavigate}>
                                            <ListItemIcon>
                                                <PaymentIcon fontSize="small" />
                                            </ListItemIcon>
                                            Payment
                                        </MenuItem>

                                        <MenuItem onClick={handleLogout}>
                                            <ListItemIcon>
                                                <ExitToAppIcon fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </div>}

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
