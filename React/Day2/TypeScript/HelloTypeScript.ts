// var msg = "Bankai TypeScript"
// msg = 100 // gives error in typescrip but allowed in javascript
var msg: string = "Hello Typscript !";
console.log(msg);
var age: number = 18;
console.log(age);
var isRaining: boolean;
isRaining = true;

var x;
x = 10
x = 'Hi'
x = [10, 20]
x = false;


function Add(x: number, y: number): number | string {
  if (x == 0) {
    return "Bankai" //wont give error if type annotation is string
  }
  return x + y // allowed
  // return "H" // gives error
};

// Add("Hello","Type"); // not allowed in ts
var ans: number | string = Add(10, 20);

// Optional parameter
function printBook(author: string, title: string, pages?: number) {
  console.log(author, title, pages);
}
// printBook() //gives error not allowed
printBook("A", "B", 10);
printBook("C", "D") // allowed as pages are not required parameter

// Default parameter
function printBook2(author: string, title: string, pages: number = 100) {
  console.log(author, title, pages);
}

// Rest Parameter
function printBook3(author: string, ...title: string[]) {
  console.log(author, title);
}
printBook3("a", "b", "c", "d");

class Car {
  private id: number = 1; // typescript feature
  name: string;
  speed: number;

  constructor(name = "McLaren", speed = 200) {
    this.id = 1;
    this.name = name;
  }

  accelerate(): string {
    return "The Car" + this.name + " is running at " + this.speed + "";
  }
}

class JamesBondCar extends Car {
  canFly: boolean
  canSubmerge: boolean
  constructor(name: string, speed: number, canFly, canSubmerge) {
    super();
    this.canFly = canFly
    this.canSubmerge = canSubmerge
  }

  accelerate(): string {
    return super.accelerate() + " Can it Fly " + this.canFly + " Can it Submerge - " + this.canSubmerge;
  }

}

console.log(new Car().accelerate())
console.log(new JamesBondCar("A", 100, true, true).accelerate())

interface IEmployee {
  name: string;
  sport: string;
}

type Player = {
  name: string;
  sport: string;
}

var player: Player = { name: "Djokovic", sport: "tennis" }

type Emp = {
  name: string;
  designation: string;
}

var cars: string[] = ["BMW", "MERC", "ASTON MARTIN"];
var emp: Array<Emp> = new Array<Emp>();

function Swap<T>(x: T, y: T) {
  var temp: T
  temp = x;
  x = y;
  y = temp;
}

Swap<number>(20, 30);
Swap<String>("Hello", "Ts");

class Point<T,V> {
  x: T;
  y: V;
}

var pointToBeNoted = new Point<string,number>();
pointToBeNoted.y;
