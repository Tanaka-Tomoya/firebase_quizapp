import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles,MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Lens from '@material-ui/icons/LensOutlined'
import Check from '@material-ui/icons/Check'
import { Link } from 'react-router-dom'
import { theme } from '../../ults/theme'

// result.filter(x => x.isCorrect === true).length



export default class questionResult extends Component {
	render() {
    const { result } = this.props
    const { questionLength } = this.props
    console.log(questionLength)
    const { correctAnswerCount } = this.props
    const hoge = Object.keys(result).map((value, index) => {
				console.log(typeof result[index])
        return (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            { result[index] ?
              <TableCell><Correct/></TableCell>
            :
              <TableCell><InCorrect/></TableCell>
            }
          </TableRow>
        );
    });
		return (
      <MuiThemeProvider theme={theme}>
			<ResultContainer>
        <Result>
  				<ResultTitle>
  					<ContentTypography variant="h2">{questionLength}問中{correctAnswerCount}問正解でした</ContentTypography>
  					<SubTypography variant="display1">素晴らしい！！</SubTypography>
  				</ResultTitle>
          <ResultDetail>
  					<Panel>
          		<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            		<ContentTypography>結果</ContentTypography>
          		</ExpansionPanelSummary>
          		<ExpansionPanelDetails>
  							<Table>
          				<TableHead>
            				<TableRow>
  				            <TableCell>No.</TableCell>
  				            <TableCell>正解/不正解</TableCell>
  					         </TableRow>
  					      </TableHead>
  				        <TableBody>
                    {hoge}
  				        </TableBody>
  					    </Table>
          		</ExpansionPanelDetails>
        		</Panel>
          </ResultDetail>
					<QuitButtonArea>
						<QuitButton color="secondary" variant="contained"><QuitLink to="/">戻る</QuitLink></QuitButton>
					</QuitButtonArea>
				</Result>
			</ResultContainer>
      </MuiThemeProvider>
		)
	}
}

const Correct = withStyles({
	root: {
		color: '#E91E63'
	}
})(Lens)

const ContentTypography = withStyles({
  root: {
    fontWeight: 800
  }
})(Typography);

const InCorrect = withStyles({
	root: {
		color: '#3F51B5'
	}

})(Check)

const SubTypography = withStyles({
	root: {
		marginTop: '30px',
		fontWeight: 800
	}
})(Typography)

const Panel = withStyles({
	root: {
		width: '550px',
    display: 'block',
	}
})(ExpansionPanel)

const QuitButton = withStyles({
	root: {
		background: `${theme.palette.secondary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '140px',
    height: '50px',
    marginLeft: 'auto',
	}
})(Button)

const QuitLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const ResultContainer = styled.div `
	margin-top: 110px;
	width: 100%;
	height: 800px;
`
const ResultTitle = styled.div `
	width: 100%;
	height: 150px;
  text-align: center;
`

const Result = styled.div `
	width: 600px;
	height: 500px;
  margin: 0 auto;
`
const DetailTitle = styled.div `
	width: 100%;
	height: 100px;
	padding-top: 100px;
`

const ResultDetail = styled.div `
  width: 100%;
  margin-top: 100px
`

const QuitButtonArea = styled.div `
		width: 95%;
		height: 100px;
		text-align: right;
		margin-top: 100px;
`
// <DetailTitle>
//   <SubTypography variant="display1">詳細</SubTypography>
// </DetailTitle>
