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
import firebase from 'firebase/app'


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
	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const { userName } = this.props.appbar;
		return (
			<Div theme={theme}>
				<AppBar color="primary">
					<Tool>
						<HomeTypography variant="h6" color="default">
							Home
						</HomeTypography>
						<Typography variant="h6" color="default">{userName}</Typography>
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
              <MenuItem onClick={() => firebase.auth().signOut()}>ログアウト</MenuItem>
            </Popover>
					</Tool>
				</AppBar>
			</Div>
		)
	}
}

const Div = styled(MuiThemeProvider)`
  width: 100%;
  height: 100px;
`
const Icon = withStyles({
	root:{
	}
})(IconButton)

const HomeTypography = withStyles({
	root: {
		marginRight: 'auto'
	}
})(Typography)

const Tool = withStyles({
	root: {
		display: 'flex',
		justifyContent: 'flex-end',
	}
})(Toolbar)
