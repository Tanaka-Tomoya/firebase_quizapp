import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import ArrowForward from '@material-ui/icons/ArrowForward'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


export default class AnswerResultModal extends Component {
	render() {
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.props.open}
			>

				<ModalDiv style={getModalStyle()}>
					<Circle></Circle>
					<Typography variant="h2">正解です！</Typography>
					<Typography variant="display1" gutterBottom>この調子でがんばりましょう！</Typography>
					<Link to='/result'>
						<Forward/>
					</Link>
				</ModalDiv>
			</Modal>
		)
	}
}


const Circle = withStyles({
  root: {
    textAlign: 'center',
    color: '#FFA000',
    fontSize: '350px'
  }
})(CheckCircleOutline)

const Forward = withStyles({
  root: {
    color: '#00B8D4',
    marginTop: '200px',
    fontSize: '100px',
    textAlign: 'center'
  }
})(ArrowForward)

const ModalDiv = styled.div `
	text-align: center;
	position: absolute;
	width: 75%;
	height: 75%;
	background: white;
`
