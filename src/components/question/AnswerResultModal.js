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
import posed from 'react-pose';

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const props = {
  visible: {
    opacity: 1,
    transitionDuration:'0.1s'
   },
  hidden: { opacity: 0 }
}

const Box = posed.div(props)


export default class AnswerResultModal extends Component {
	render() {
    const { userAnswer } = this.props
    const { questionAnswer } = this.props
    const { questionId } = this.props
    const { open } = this.props
    const { isVisible } = this.props
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
			>

				<ModalDiv style={getModalStyle()}>
          {userAnswer === questionAnswer &&
            <React.Fragment>
              <Box pose={ isVisible ? 'visible' : 'hidden' }>
                <True/>
              </Box>
    					<ContentTypography variant="h2">正解です！</ContentTypography>
    					<Typography variant="display1" gutterBottom>この調子でがんばりましょう！</Typography>
              <ForwardButton onClick={() => this.props.correctAnswer()}>
                <Forward/>
              </ForwardButton>
            </React.Fragment>
          }
          {userAnswer !== questionAnswer &&
            <React.Fragment>
              <False/>
              <ContentTypography variant="h2">不正解</ContentTypography>
              <ContentTypography variant="display1" gutterBottom>答えは{questionAnswer}です</ContentTypography>
              <ForwardButton onClick={() => this.props.incorrectAnswer()}>
                <Forward/>
              </ForwardButton>
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

const ContentTypography = withStyles({
  root: {
    fontWeight: 800
  }
})(Typography);

const ForwardButton = withStyles({
  root: {
    height: '100px',
    marginTop: '100px'
  }
})(Button)

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
