import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListContent from './ListContent'
import TextField from '@material-ui/core/TextField';
import { theme } from '../../ults/theme'
import ListModal from './ListModal';


export default class QuestionList extends Component {

  state = {
    open: true,
  }

  searchListItems = (tag) => {
    this.setState({ open: false }, () => {
      this.props.fetchListItems(tag)
    });
  };
  componentWillMount() {
    console.log(this.state.open)
    if(!this.state.open){
      window.location.reload()
    }
    console.log('aaa')
  }
	render() {
    const { items } = this.props.list
    console.log(items)
    const itemLength = Object.keys(items).length
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
            {itemLength === 0 &&
              <ListModal open={this.state.open}  handleClick={tag => this.searchListItems(tag)}/>
            }
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

const SearchResult = styled.div `
  width: 80%;
  height: 100%;
  background: white;
  margin: 0 auto;
  margin-top: 30px;
`
