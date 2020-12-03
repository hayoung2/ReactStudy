import logo from './logo.svg';
import './App.css';
import Customer from './Component/Customer';
import CustomerAdd from './Component/CustomerAdd';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})


class App extends Component {
  state = {
    customers: "",
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi().then(res => this.setState({ customers: res })).catch(err => console.log(err));
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
        <Paper className={styles.root}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    job={c.job}
                    birthday={c.birthday}
                    image={c.image}
                  />
                )
              }) : <TableRow><TableCell colSpan="6" align="center">
                <CircularProgress className={styles.progress} variant="determinate" value={this.state.completed} />
              </TableCell></TableRow>}
            </TableBody>
          </Table>

        </Paper>
        <CustomerAdd />
      </div>
    );
  }
}


export default withStyles(styles)(App);
