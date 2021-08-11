import bootstrap from '/@/main';
import { registerGlobComp } from './components/registerGlobComp';

async function start() {
  const app = await bootstrap();
  registerGlobComp(app);
}
void start();
