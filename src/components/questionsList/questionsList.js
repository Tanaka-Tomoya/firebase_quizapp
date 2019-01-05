import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Star from '@material-ui/icons/StarRate'
import { theme } from '../../ults/theme'

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
  };
};

function createData(lang, langImg) {
  return { lang, langImg };
};

const languages = [
	createData('React', `react.svg`),
	createData('HTML', 'html5.svg'),
	createData('PHP', 'php.svg'),
	createData('Python', 'python.svg'),
	createData('Javascript', 'javascript.svg'),
	createData('Redux', 'redux.svg'),
];

function createItemData(id, title, tag, img, level, user) {
  return { id, title, tag, img, level, user }
};

const items = [
  createItemData('1','React入門',' React', `react.svg`, '1', 'user'),
	createItemData('2','HTML入門',' HTML', 'html5.svg', '3', 'user'),
	createItemData('3','PHP入門',' PHP', 'php.svg', '4', 'user'),
	createItemData('4','Python入門',' Python', 'python.svg', '2', 'user'),
	createItemData('5','Javascript入門',' Javascript', 'javascript.svg', '5', 'user'),
	createItemData('6','Redux入門',' Redux', 'redux.svg', '3', 'user'),
]



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
		this.setState({ open: false });
		console.log(this.state)
	};

	render() {
		console.log(process.env.PUBLIC_URL)
		return (
			<Container theme={theme}>
        <ListContainer>
          <SearchField
             id="outlined-search"
             label="Search field"
             type="search"
             variant="outlined"
           />
         <SearchResult>
            <List>
              { items.map(item => {
                return(
                <ListItemContents alignItems="flex-start" key={item.id}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={ process.env.PUBLIC_URL + item.img } />
                  </ListItemAvatar>
                  <ListItemText
                    primary=
                     <Link to="/question">
                      <Typography component="span" color="textPrimary">
                        {item.title}
                      </Typography>
                     </Link>
                    secondary={
                      <React.Fragment>
                        <Typography component="span" color="textPrimary">
                          {item.user + item.id}
                        </Typography>
                        <Chip label={ item.tag }/>
                        <Tag label={ item.tag }/>
                        <Tag
                          label={ item.level}
                          icon=<Star/>
                        />
                      </React.Fragment>
                    }
                  />
                </ListItemContents>
                )
              })}
            </List>
         </SearchResult>
        </ListContainer>
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
												image={process.env.PUBLIC_URL + item.langImg}
							          title="Contemplative Reptile"
							        />
                    <FormControlLabelField
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
              <SearchButton color="secondary" variant="contained"　onClick={this.handleClose}>探す！</SearchButton>
						</FormContainer>
					</ModalContainer>
				</Modal>
			</Container>
		)
	}
}

const LangCard = withStyles({
	root: {
		width: '200px',
		height: '200px',
		marginLeft: '50px',
		marginTop: '30px',
		position: 'relative',
		zIndex: '1'
	}
})(Card)

const Media = withStyles({
	root: {
		margin: '0 auto',
		marginTop: '10px',
		height: '132px',
		width: '140px',
		zIndex: '1'
	}
})(CardMedia)

const FormContainer = withStyles({
	root: {
		width: '100%',
		height: '55%',
		display: 'flex',
		flexDirection: 'row',
	}
})(FormGroup)

const FormControlLabelField = withStyles({
	root: {
		zIndex: '2',
		width: '150px',
		height: '100%',
		top: '0px',
		left: '16px',
		position: 'absolute'
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

const Tag = withStyles({
  root: {
    marginLeft: '5px'
  }
})(Chip)

const CheckField = withStyles({
	root: {
		height: '5px',
		width: '5px',
		marginTop: 'auto'
	}
})(Checkbox)

const SearchButton = withStyles({
	root: {
		background: `${theme.palette.secondary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '130px',
    height: '50px',
    marginLeft: 'auto',
    marginRight: '20px',
    marginTop: '20px'
	}
})(Button)

const Container = withStyles({
  root: {
  }
})(MuiThemeProvider)

const ListContainer = withStyles({
  root: {
    marginTop: '64px',
    height: '100%',
    width: '100%'
  }
})(FormControl)


const SearchField = withStyles({
  root: {
    width: '80%',
    height: '80px',
    marginTop: '30px',
    margin: '0 auto'
  }
})(TextField)

const ListItemContents = withStyles({
  root: {
    borderBottom: 'solid 1px #ADADAD'
  }
})(ListItem)


const CheckFieldValue = styled.span `
	display: block;
	margin-top: auto;

`
const ModalContainer = styled.div `
	text-align: center;
	position: absolute;
	width: 800px;
	height: 650px;
	background: white;
`

const SearchResult = styled.div `
  width: 80%;
  height: 100%;
  background: white;
  margin: 0 auto;
  margin-top: 30px;
`

//background-image: url("/static/media/react.876a8325.svg");
//image="/static/images/cards/contemplative-reptile.jpg"
//../../img/javascript.svg
//image={`../../img/${item.langImg}`}
