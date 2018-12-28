import React, { Component } from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default class questions_list extends Component {
	render() {
		return (
			<FormControl>
				<InputLabel
					htmlFor="custom-css-standard-input"
				>
					Custom CSS
				</InputLabel>
				<Input
					id="custom-css-standard-input"

				/>
			</FormControl>
		)
	}
}
