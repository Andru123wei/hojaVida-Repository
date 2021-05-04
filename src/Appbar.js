import React, { Fragment } from 'react';
import {
    makeStyles,
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    useScrollTrigger,
    Slide
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';   
import Form from './appBarComponents/form'
import Home from './appBarComponents/home'
import SignUp from './appBarComponents/SignUp'
import SignIn from './appBarComponents/SignIn'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
        },
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: theme.spacing(6),
    },
    root2: {
        backgroundColor: "#1C6FD9"
    },
    root3: {
        backgroundColor: "white",

    },
}));




export default function MenuAppBar(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        
    };

    return (
        <Fragment className={classes.root}>
            
            <Router>
                <HideOnScroll {...props}>
                    <AppBar className={classes.root2}>
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                HojaVida
                        </Typography>

                            <div className={classes.root}>

                                <Link to="/" style={{ textDecoration: 'none' }}  >
                                    <Button variant="contained" color="white" className={classes.root3}>
                                        Home
                                    </Button>   
                                </Link>

                                <Link to="/form" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" color="white" className={classes.root3} >
                                        Form
                                    </Button>
                                </Link>

                            </div>

                            {auth && (
                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>

                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}>
                                   
                                        <Link to="/signIn" style={{ textDecoration: 'none' }}>
                                            <MenuItem onClick={handleClose} >Iniciar sesión</MenuItem>                             
                                        </Link>

                                        <Link to="/signUp" style={{ textDecoration: 'none' }}>
                                            <MenuItem onClick={handleClose}>Registrarse</MenuItem>
                                        </Link>
                                    </Menu>
                                </div>
                            )}

                        </Toolbar>
                    </AppBar>
                </HideOnScroll>

                <div className={classes.offset}></div>

                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/form">
                        <Form />
                    </Route>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                    <Route path="/signIn">
                        <SignIn />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
}