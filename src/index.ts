import {app} from './app';
import {config} from './config';

app.listen(config.port, () => {
  console.log(`Book Club server listening on port ${config.port}...`);
});
