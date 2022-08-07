import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customent';
import Paper from '@material-ui/core/Table';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import {withStyles} from '@material-ui/core/styles';

const customers =[{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '920112',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길순',
  'birthday': '890112',
  'gender': '여자',
  'job': '무직'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이영희',
  'birthday': '920112',
  'gender': '남자',
  'job': '디자이너'
}]

class App extends Component {
  render() {
    // const {classes} = this.props;
    return (
      <Paper>
        <Table>
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
          {
            customers.map(item => {
              return (
                <Customer 
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  birthday={item.birthday}
                  gender={item.gender}
                  job={item.job}
                  />
              );
          })
        }
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
