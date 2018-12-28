import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme ({
	palette: {
		type: 'light',
		primary: { main: '#00B8D4' },
		default: { default: '#FFFFFF'},
		secondary: { main: '#FFA000' }
	},
	typography: {
		h6: {
			color: 'rgba(250, 250, 250, 100)'
		}
	}
})
