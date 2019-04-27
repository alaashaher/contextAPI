import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { withUser } from "../../lib/withUser";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    marginTop: "50px",
  },
  input: {
    width: 200,
    marginBottom: "20px",
    marginTop: "6px",
  },
});
class LogIn extends Component {

  render() {
    const { classes } = this.props;


    return (
      <div>
        <Typography component="h2" variant="login" gutterBottom> Login </Typography>

        <Input
          placeholder="User Name"
          value={this.props.themeContext.name}
          className={classes.input}
        />
        <br></br>
        <Input
          placeholder="PassWord"
          value={this.props.themeContext.pass}
          className={classes.input}
          type="password"
        />
        <br></br>
        <Button variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
      </div>
    );
  }
}
// LogIn.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default withUser(withStyles(styles)(LogIn));
