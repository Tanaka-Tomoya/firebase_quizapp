import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { theme } from '../../ults/theme'
import ListContent from './ListContent.js'
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import ListModal from './ListModal';


export default class QuestionList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
  }

  searchListItems = (tag) => {
    this.setState({ open: false })
    this.props.fetchListItems(tag)
  };
	render() {
    const { items } = this.props
    const isEmpty = items.length === 0
    if (this.props.isLoading) {
      return (
        <Info>ロード中やで</Info>
      )
    }else if (this.props.hasError) {
      return (
        <Info>エラーやで</Info>
      )
    } else {
      return (
        <MuiThemeProvider theme={theme}>
          <Container>
            <ListContainer>
              <SearchField
                 id="outlined-search"
                 label="Search field"
                 type="search"
                 variant="outlined"
               />
              <SearchResult>
                <ListItems>
                  {isEmpty && <Info>中身がねぇ</Info>}
                  {!isEmpty && Object.keys(items).map((key) => (
                      <ListContent key={key} {...items[key]}/>
                  ))}
              </ListItems>
             </SearchResult>
            </ListContainer>
            <ListModal open={this.state.open}  handleClick={tag => this.searchListItems(tag)}/>
          </Container>
        </MuiThemeProvider>
      )
    }
	}
}
//this.props.fetchListItems(item.lang)
const ListItems = withStyles({
  root: {

  }
})(List)
const FormContainer = styled.div `
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`


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


const ListContainer = withStyles({
  root: {
     width: '80%',
     height: '100%',
     background: 'white'
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

const ActionArea = withStyles({
  root: {
    width: '100%',
    height: '75%'
  }
})(CardActionArea)

const LangTypography = withStyles({
  root: {
    width: '100%',
    height: '25%'
  }
})(Typography)

const Lang = withStyles({
	root: {
		width: '180px',
		height: '200px',
		marginLeft: '50px',
		marginTop: '30px',
		position: 'relative',
		zIndex: '1'
	}
})(Card)

const Img = styled.img `
  width: 100%;
  height: 90%;
  object-fit: contain;
`

const Container = styled.div `
  width: 100%;
  height: 100%;
  margin-top: 64px;
  text-align: center
`

const Info = styled.div `
  width: 100%;
  height: 100%;
  margin-top: 64px;
`

const ModalContainer = styled.div `
	text-align: center;
	position: absolute;
	width: 970px;
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

const RadioField = withStyles({
	root: {
		height: '5px',
		width: '5px',
		marginTop: 'auto'
	}
})(Radio)

const Media = withStyles({
	root: {
		margin: '0 auto',
		marginTop: '10px',
		height: '132px',
		width: '140px',
		zIndex: '1'
	}
})(CardMedia)
