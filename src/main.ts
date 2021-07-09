import { bootstrap } from '/@/main';
import { useTestStoreWidthOut } from '/@@/store/test';

const testStore = useTestStoreWidthOut();
await testStore.testPage();
console.log(testStore.name);

const app = await bootstrap();
console.log(app);
