import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
})

export default theme