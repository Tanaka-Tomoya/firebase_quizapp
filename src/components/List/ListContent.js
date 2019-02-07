import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Chip from '@material-ui/core/Chip';
import Star from '@material-ui/icons/StarRate'
import Avatar from '@material-ui/core/Avatar';


const ListContent = (props) => {
	return(
		<ListItemContents alignItems="flex-start" key={props.id}>
			<ListItemAvatar>
				<Avatar alt="Test"/>
			</ListItemAvatar>
			<ListItemText
				primary=
				 <Link to={`question/${props.id}`}>
					<Typography component={'span'} color="textPrimary">
						{props.questions_title}
					</Typography>
				 </Link>
				secondary={
					<React.Fragment>
						<Typography component={'span'} color="textPrimary">
							{props.id}
						</Typography>
						<Chip label={ props.tag }/>
						<Tag label={ props.tag }/>
						<Tag
							label={ props.level}
							icon=<Star/>
						/>
					</React.Fragment>
				}
			/>
		</ListItemContents>
	)
}



const ListItemContents = withStyles({
  root: {
    borderBottom: 'solid 1px #ADADAD'
  }
})(ListItem)


const Tag = withStyles({
  root: {
    marginLeft: '5px'
  }
})(Chip)

export default ListContent
