import { bootstrap } from '/@/main';
import { registerGlobComp } from './components/registerGlobComp';

const app = await bootstrap();
registerGlobComp(app);
