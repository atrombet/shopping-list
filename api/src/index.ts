import express, { Application } from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
// import { createConnection } from 'typeorm';
import router from './routes';

const app: Application = express();
const port = 4000; // default port to listen

app.use(cors());
app.use(bodyparser.json({ type: 'application/json' }));
app.use(bodyparser.urlencoded({ extended: true }));

// createConnection({
//   type: 'postgres',
//   url: 'postgres://root:password@db/shopping_list_test',
//   entities: []
// }).then(() => {

//   app.use('/api/v1/', router);

//   app.listen(port, () => {
//     console.log( `server started at http://localhost:${ port }` );
//   });

// })
// .catch(error => {
//   console.error('Connection could not be created');
//   console.error(error);
// });

app.use('/api/v1/', router);

app.listen(port, () => {
  console.log( `server started at http://localhost:${ port }` );
});
