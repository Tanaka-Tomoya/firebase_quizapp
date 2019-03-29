import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {theme} from '../../ults/theme'
import Popover from '@material-ui/core/Popover'
import * as firebase from "firebase/app";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'


export default class MenuBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			anchorEl: null,
		}
	}
	componentDidMount() {
		this.props.getUserProfile()
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};
	logout = () => {
		firebase.auth().signOut();
		window.location.reload();
	}
	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const { userName } = this.props.appbar;
		const { isUser } = this.props
		const { pathname } = this.props
		const hoge = pathname === '/signin' || pathname === '/signup'
		if(hoge) {
			 return (
				<div></div>
			 )
			} else {
			 return (
				<Div theme={theme}>
				<AppBar color="primary">
					<Tool>
						<LinkHome to ="/">
							<HomeTypography variant="h6" color="default">
								Home
							</HomeTypography>
						</LinkHome>
						<Typography variant="h6" color="default">{userName}</Typography>
						{isUser ?
							<React.Fragment>
								<Icon
									aria-owns="menu-appbar"
									aria-haspopup="true"
									onClick={this.handleMenu}
								>
									<AccountCircle />
								</Icon>
								<Popover
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									open={open}
									onClose={this.handleClose}
								>
									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									<MenuItem onClick={this.logout}>ログアウト</MenuItem>
								</Popover>
							</React.Fragment>
							:
							<React.Fragment>
								<LinkTo to="/signin">
								    <HomeTypography variant="h6" color="default">
										ログイン
								    </HomeTypography>
								</LinkTo>
							</React.Fragment>
						}
					</Tool>
				</AppBar>
			</Div>
			)
		}
	}
}

const Div = styled(MuiThemeProvider)`
  width: 100%;
  height: 100px;
`
const LinkTo = styled(Link)`
	text-decoration: none;
`
const LinkHome = styled(Link)`
	text-decoration: none;
	margin-right: auto;
`
const SigninButton = withStyles({
  root: {
    background: `${theme.palette.secondary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '160px',
    height: '55px',
		textDecoration: 'none',
		marginLeft: '5px'
}

})(Button)
const Icon = withStyles({
	root:{
	}
})(IconButton)

const HomeTypography = withStyles({
	root: {
		marginRight: 'auto',
		fontWeight: 800
	}
})(Typography)

const Tool = withStyles({
	root: {
		display: 'flex',
		justifyContent: 'flex-end',
	}
})(Toolbar)
