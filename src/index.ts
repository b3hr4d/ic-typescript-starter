/* eslint-disable no-console */
import { b3_system, idlFactory } from './candid/index';
import { createReActorStore } from '@ic-reactor/store';

type B3System = typeof b3_system;

const { actorStore, callMethod } = createReActorStore<B3System>({
  canisterId: 'xeka7-ryaaa-aaaal-qb57a-cai',
  idlFactory,
});

actorStore.subscribe((state) => {
  console.log(state);
});

callMethod('version').then((greeting: string) => {
  console.log(greeting);
});
