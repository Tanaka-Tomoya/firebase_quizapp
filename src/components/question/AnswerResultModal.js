import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import ArrowForward from '@material-ui/icons/ArrowForward'
import FalseIcon from '@material-ui/icons/Clear'
import Button from '@material-ui/core/Button'

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
    // console.log(this.props.userAnswer)
    // console.log(this.props.questionAnswer)
    const { userAnswer } = this.props
    const { questionAnswer } = this.props
    const { questionId } = this.props
    console.log(`ユーザの答え:${userAnswer}でほんまの答えは${questionAnswer}やで`)
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.props.open}
			>

				<ModalDiv style={getModalStyle()}>
          {userAnswer === questionAnswer &&
            <React.Fragment>
              <True/>
    					<Typography variant="h2">正解です！</Typography>
    					<Typography variant="display1" gutterBottom>この調子でがんばりましょう！</Typography>
              <Button onClick={() => this.props.correctAnswer()}>
                <Forward/>
              </Button>
            </React.Fragment>
          }
          {userAnswer !== questionAnswer &&
            <React.Fragment>
              <False/>
              <Typography variant="h2">不正解</Typography>
              <Typography variant="display1" gutterBottom>惜しかったねぇ...</Typography>
              <Button onClick={() => this.props.incorrectAnswer()}>
                <Forward/>
              </Button>
            </React.Fragment>
          }

				</ModalDiv>
			</Modal>
		)
	}
}


const True = withStyles({
  root: {
    textAlign: 'center',
    color: '#FFA000',
    fontSize: '350px'
  }
})(CheckCircleOutline)

const False = withStyles({
  root: {
    textAlign: 'center',
    color: '#00B8D4',
    fontSize: '350px'
  }
})(FalseIcon)

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
