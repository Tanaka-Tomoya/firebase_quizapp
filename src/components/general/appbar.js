import React, { Component } from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import {theme} from '../../ults/theme'


export default class MenuBar extends Component {
	componentWillMount() {
		this.props.getUserProfile()
	}
	render() {
		return (
			<Div theme={theme}>
				<AppBar color="primary">
					<Toolbar>
						<IconButton color="inherit" aria-label="Menu">
						</IconButton>
						<Typography variant="h6" color="default">
							Home
						</Typography>
						<Button color="primary">Login</Button>
					</Toolbar>
				</AppBar>
			</Div>
		)
	}
}

const Div = styled(MuiThemeProvider)`
  width: 100%;
  height: 100px;
`
