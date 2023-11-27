import { createApp, startServer, closeServer  } from '../../index';
import supertest, { SuperTest, Test } from 'supertest';
import { Express } from 'express';

describe('Endpoint Tests', () => {
  let app: Express;
  let request: SuperTest<Test>;
  let server: string;

  beforeAll(() => {
    app = createApp() as Express;
    server = startServer(app, 8000);
    request = supertest(app);
  });

  afterAll((done) => {
    closeServer(server).then(() => {
      done();
    });
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

  //Test invalid email address input error
  it('should respond with status 400 and a message Invalid email address', (done) => {
    const invalidEmailInput = {
      email: 'chernaevangelgmail.com',
      mobilePhone: '+47266628393',
      description: 'I want a simple website!',
    };

    request
      .post('/formInputs/addNewInput')
      .send(invalidEmailInput)
      .expect(400)
      .expect({ error: 'Invalid email address' }) 
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

   //Test invalid mobile phone input error
   it('should respond with status 400 and a message Invalid mobile phone number', (done) => {
    const invalidMobilePhoneInput = {
      email: 'chernaevangel@gmail.com',
      mobilePhone: 'invalidPhone',
      description: 'I want a simple website!',
    };

    request
      .post('/formInputs/addNewInput')
      .send(invalidMobilePhoneInput)
      .expect(400)
      .expect({ error: 'Invalid mobile phone number' }) 
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  


});
