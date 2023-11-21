import { createApp, startServer } from '../../index';
import supertest, { SuperTest, Test } from 'supertest';
import { Express } from 'express';

describe('Endpoint Tests', () => {
  let app: Express;
  let request: SuperTest<Test>;

  beforeAll(() => {
    app = createApp() as Express;
    startServer(app, 8000);
    request = supertest(app); 
  });


  //Test endpoint test
  it('should respond with "Welcome to Express & TypeScript Server" at /', (done) => {
    request
      .get('/')
      .expect(200)
      .expect('Welcome to Express & TypeScript Server')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

});
