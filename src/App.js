import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customent';

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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
