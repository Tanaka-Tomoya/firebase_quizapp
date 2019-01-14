import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';


export default class LangCard extends Component {
	render() {
		return(
			<Lang key={this.props.index} >
				<ActionArea onClick={() => this.props.handleClick(this.props.lang) }>
					<Img src={process.env.PUBLIC_URL + this.props.langImg}/>
				</ActionArea>
				<LangTypography variant="display1">{this.props.lang}</LangTypography>
			</Lang>
		)
	}
}

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


const Img = styled.img `
  width: 100%;
  height: 90%;
  object-fit: contain;
`
