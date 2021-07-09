import { bootstrap } from '/@/main';
import { useTestStoreWidthOut } from '/@@/store/test';

const testStore = useTestStoreWidthOut();
await testStore.testSaveAction({});
console.log(testStore.name);

const app = await bootstrap();
console.log(app);
