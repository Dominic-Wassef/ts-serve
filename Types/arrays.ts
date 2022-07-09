const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

// Preventing incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible Types
const importantDates = [new Date(), '2030-10-10'];

// You can add different types manaully by setting the types
const importantDate: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDate.push(new Date());
// If you put an incorrect value, an error will be thrown
// importantDate.push(100)