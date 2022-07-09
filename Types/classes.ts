class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
};

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// Modifiers: There are three: private, protected, public.
// Public can be accessed anywhere
// Protected can only be called within a child class and the parent class
// Private can only be called within the parent class

// The super method is a reference to the constructor in the parent function

class Cars extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const cars2 = new Cars(4, 'red');
cars2.startDriving();