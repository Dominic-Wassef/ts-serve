const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// This is the tuple
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 10];

pepsi[0] = 'brown';
pepsi[2] = 40;

// This is why we wont use tuples too often
const carSpecs: [number, number] = [400, 3354];

// You can set it as a object to make the data more understandable
const carStats = {
  horsepower: 400,
  weight: 3354
};