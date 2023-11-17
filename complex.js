//program to add two complex numbers(via class and objects)
class Complex{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary=imaginary;
    }
     add(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
        return (this.real,this.imaginary);
    }
}
let a = new Complex(6,3);
let b = new Complex(2,4);
a.add(b);
console.log(`${a.real} + ${a.imaginary}i`);
// Program to depict method overriding
class Human{
    constructor(name,age){
        this.age = age;
        this.name=name;
    }
     avgSleep(num){
          console.log(`Human will sleep for ${num} hours`);
      
    }
}
class Child extends Human{
     avgSleep(num){
        console.log(`The child will sleep for ${num} hours`);
      
    }
}
let  h1= new Human("Human",67);
let c1 = new Child("baby",3);
c1.avgSleep(10);
