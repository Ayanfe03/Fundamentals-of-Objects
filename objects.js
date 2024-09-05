let phone = {
  brand: 'Samsung',
  name: 'Galaxy S24 Ultra',
  color: 'black',
  camera: '250MP',
  weight: 200, // in grams
  screenSize: 6.5, // in inches
  description: () => { //you should not use arrow function to declare a function inside of an object
    return `This is a ${phone.color} ${phone.brand} phone with a ${phone.camera} camera and a ${phone.screenSize} inch screen`;
  }
}

console.log("phone: ", phone.description());
const phoneTwo = new Object();

// Add propeties to phoneTwo object
phoneTwo.brand = 'Infinix';
phoneTwo.name = 'Hot 18';
phoneTwo.color = 'grey';
phoneTwo.camera = '200MP';
phoneTwo.weight = 100 // in grams
phoneTwo.screenSize = 6.0;

console.log('phoneTwo: ', phoneTwo);
console.log('phoneTwo brand: ', phoneTwo.brand);
phoneTwo.brand = 'Itel';
console.log('phoneTwo brand: ', phoneTwo.brand);
console.log('phoneTwo camera: ', phoneTwo['camera']);
