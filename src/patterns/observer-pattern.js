import { Subject } from 'rxjs';
 
const channel1 = new Subject();
const channel2 = new Subject();

const subscriber1 = (v) => console.log(`subscriber1: ${v}`)
const subscriber2 = (v) => console.log(`subscriber2: ${v}`)
const subscriber3 = (v) => console.log(`subscriber3: ${v}`)
const subscriber4 = (v) => console.log(`subscriber4: ${v}`)


channel1.subscribe(subscriber1);
channel1.subscribe(subscriber2);

channel2.subscribe(subscriber3);
channel2.subscribe(subscriber4);

// channel1.next('Hello from channel1');
channel2.next('Hello from channel2');