// import React from 'react';
import { choice, remove } from './helpers';
import foods from './food';

let rand = choice(foods);
console.log(`I would like one ${rand}, please.`)
console.log(`Here you go: `, rand)
console.log("Delicious! May I have another?")
remove(foods, rand);
console.log(`I'm sorry, we are all out. We have ${foods.length} other fruits, though.`)