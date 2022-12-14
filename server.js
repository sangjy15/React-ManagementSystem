const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([{
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
      }]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));