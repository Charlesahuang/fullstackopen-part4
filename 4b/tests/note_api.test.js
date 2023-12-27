const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);


//4.8
test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});




//4.9
test('a valid _id is returned by the endpoint', async () => {
  const response = await api.get('/api/notes');
  expect(response.body[0].id).toBeDefined();

  // 也可以检查整个数组的每个对象是否都有_id
  response.body.forEach(note => {
    expect(note.id).toBeDefined();
  });
});

//4.10
test('test success add a new blog', async () => {
  const response = await api.get('/api/notes');

  const body = {
    "content": "test add a new blog",
    "important": false,
    url: 'www.googlezd.com',
    title: 'test blog',
    likes: 114
  }
  //post标准写法
  const newblog = await api.post('/api/notes').set('Content-Type', 'application/json').send(body);
  const newresponse = await api.get('/api/notes');
  //通过两次get包裹新增的post，验证数据是否加一
  expect(newresponse.body.length).toBe(response.body.length + 1)
});

//4.11
test('test default like is 0', async () => {
  const body = {
    "content": "test default like is 0",
    "important": false,
    url: 'www.googlezd.com',
    title: 'test blog'
  }
  const newblog = await api.post('/api/notes').set('Content-Type', 'application/json')
    .send(body);
  expect(newblog.body.likes).toBe(0)
});

//4.12
test('if lack url or title should return 400', async () => {
  const response = await api.get('/api/notes');

  const body = {
    "content": "if lack url or title should return 400",
    "important": true
  }
  await api.post('/api/notes').set('Content-Type', 'application/json').send(body).expect(400);
});

//4.13
test('test success add a new blog', async () => {
  const body = {
    "content": "test delete a new blog",
    "important": false,
    url: 'www.googlezd.com',
    title: 'test blog'
  }
  //先添加数据 获得该数据的id
  const newblog = await api.post('/api/notes').set('Content-Type', 'application/json').send(body);
  //第一次查找 验证数据是否存入数据库，找到会返回200
  await api.get(`/api/notes/${newblog.body.id}`).expect(200);
  //删除该数据 删除成功会返回204
  await api.delete(`/api/notes/${newblog.body.id}`).expect(204);
  //查找该数据 找不到会返回404
  await api.get(`/api/notes/${newblog.body.id}`).expect(404);
});

//4.14
test('put new contect', async () => {
  const body = {
    "content": "put new contect",
    "important": false,
    url: 'www.googlezd.com',
    title: 'test blog'
  }

  const putbody = {
    "content": "put success",
    "important": true,
    likes:118
  }
  //new a blog
  const newblog = await api.post('/api/notes').set('Content-Type', 'application/json').send(body).expect(200);
  expect(newblog.body.likes).toBe(0)
  //update blog
  const updateblog =  await api.put(`/api/notes/${newblog.body.id}`).set('Content-Type', 'application/json').send(putbody);
  //expect update suceess
  expect(updateblog.status).toBe(200)
  expect(updateblog.body.content).toBe('put success')
  expect(updateblog.body.likes).toBe(118)
});


afterAll(async () => {
  await mongoose.connection.close();
});