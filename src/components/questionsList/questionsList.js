import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ReactImg from '../../img/react.svg'
import HtmlImg from '../../img/html5.svg'
import PhpImg from '../../img/php.svg'
import PythonImg from '../../img/python.svg'
import JavascriptImg from '../../img/javascript.svg'
import ReduxImg from '../../img/redux.svg'

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
  };
}

function createData(lang, langImg) {
  return { lang, langImg };
}

const languages = [
	createData('React', `reactImg`),
	createData('Html', 'html5.svg'),
	createData('Php', 'php.svg'),
	createData('Python', 'python.svg'),
	createData('Javascript', 'javascript.svg'),
	createData('Redux', 'redux.svg'),
];

const LangCard = withStyles({
	root: {
		width: '150px',
		height: '150px',
		marginLeft: '50px',
		marginTop: '30px'
	}
})(Card)

const Media = withStyles({
	root: {
		margin: '0 auto',
		marginTop: '10px',
		height: '100px',
		width: '100px',
		zIndex: '1'
	}
})(CardMedia)

const FormContainer = withStyles({
	root: {
		width: '100%',
		height: '95%'
	}
})(FormGroup)

const FormControl = withStyles({
	root: {
		zIndex: '2',
		width: '150px',
		top: '70px',
		left: '60px'
	},
	label: {
		width: '100%',
		height: '35px',
		paddingTop: 'auto',
		marginTop: 'auto',
		textAlign: 'left',
		fontSize: '25px'
	}
})(FormControlLabel)

const CheckField = withStyles({
	root: {
		height: '5px',
		marginTop: 'auto'
	}
})(Checkbox)

export default class questionsList extends Component {
	state = {
    open: false,
  };

	handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

	componentWillMount(){
		this.setState({ open: true });
		console.log(this.state)
	};

	render() {
		return (
			<ListContainer>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
				>
					<ModalContainer style={getModalStyle()}>
						<Typography variant="h4">言語を選んでください</Typography>
						<FormContainer>
							{languages.map(item => {
								return (
									<LangCard>
							        <Media
							          image={ReactImg}
							          title="Contemplative Reptile"
							        />
											<FormControl
								        control={
								          <CheckField
								            value="test"
								            color="primary"
								          />
								        }
								        label={item.lang}
								      />
							    </LangCard>
								)
							})}
						</FormContainer>
					</ModalContainer>
				</Modal>
			</ListContainer>
		)
	}
}

const ListContainer = styled.div `
	margin-top: 64px;
	width: 1400px;
	height: 800px;
`

const CheckFieldValue = styled.span `
	display: block;
	margin-top: auto;

`

const ModalContainer = styled.div `
	text-align: center;
	position: absolute;
	width: 75%;
	height: 75%;
	background: white;
`

//background-image: url("/static/media/react.876a8325.svg");
//image="/static/images/cards/contemplative-reptile.jpg"
//../../img/javascript.svg
//image={`../../img/${item.langImg}`}
