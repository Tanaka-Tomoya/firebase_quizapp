import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
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


let id = 0;
function createData(number, isCorrect) {
  id += 1;
  return { id, number, isCorrect };
}

const rows = [
  createData('1', true),
  createData('2', true),
	createData('3', false),
];

export default class questionResult extends Component {
	render() {
    console.log(this.props.result)
    console.log(rows)
    const { result } = this.props
    const correctAnswerCount = result.filter(x => x.isCorrect === true).length
		return (
			<ResultContainer>
				<ResultTitle>
					<Typography variant="h2">{result.length}問中{correctAnswerCount}問正解でした</Typography>
					<SubTypography variant="display1">素晴らしい！！</SubTypography>
				</ResultTitle>
				<ResultDetail>
					<DetailTitle>
						<SubTypography variant="display1">詳細</SubTypography>
					</DetailTitle>
					<Panel>
        		<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          		<Typography>結果</Typography>
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
									{result.map(result => {
										return (
											<TableRow key={result.id}>
												<TableCell component="th" scope="row">
													{result.id}
												</TableCell>
												{ result.isCorrect ?
													<TableCell><Correct/></TableCell>
												:
													<TableCell><InCorrect/></TableCell>
												}
											</TableRow>
										);
									})}
				        </TableBody>
					    </Table>
        		</ExpansionPanelDetails>
      		</Panel>
					<QuitButtonArea>
						<QuitButton variant="contained"><QuitLink to="/">戻る</QuitLink></QuitButton>
					</QuitButtonArea>
				</ResultDetail>
			</ResultContainer>
		)
	}
}

const Correct = withStyles({
	root: {
		color: '#E91E63'
	}
})(Lens)

const InCorrect = withStyles({
	root: {
		color: '#3F51B5'
	}

})(Check)

const SubTypography = withStyles({
	root: {
		marginTop: '30px'
	}
})(Typography)

const Panel = withStyles({
	root: {
		width: '800px',
	}
})(ExpansionPanel)

const QuitButton = withStyles({
	root: {
		background: `${theme.palette.secondary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '150px',
    height: '50px',
    marginLeft: 'auto',
	}
})(Button)

const QuitLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const ResultContainer = styled.div `
	margin-top: 64px;
	width: 100%;
	height: 800px;
`
const ResultTitle = styled.div `
	width: 100%;
	height: 150px;
	margin-top: 100px;
	text-align: center;
`

const ResultDetail = styled.div `
	width: 1300px;
	height: 500px;
	margin-left: 300px;
`
const DetailTitle = styled.div `
	width: 100%;
	height: 100px;
	padding-top: 100px;

`

const QuitButtonArea = styled.div `
		width: 100%;
		height: 100px;
		text-align: right;
		margin-top: 100px;
`
