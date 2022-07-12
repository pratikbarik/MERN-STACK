let Employee = 
{
    name: "Pratik Kumar",
    email: "pratikbarik65@gmail.com",
    phone: 8823617947,
    basicSalary: 102500000,
    totalSalary: function(){
      const HRA = .15*this.basicSalary;
      const specialAllowance = .2*this.basicSalary;
      var totalSal = this.basicSalary + HRA + specialAllowance;
      if(this.basicSalary>90000)
      {
        totalSal = totalSal - (0.30*totalSal);
        console.log("1:", totalSal);
      }
      else if(this.basicSalary>70000)
      {
        totalSal = totalSal - (0.20*totalSal);
        console.log("2:", totalSal);
      }
      else if(this.basicSalary>50000)
      {
        totalSal = totalSal - (0.15*totalSal);
        console.log("3:", totalSal);
      }
      else if(this.basicSalary>40000)
      {
        totalSal = totalSal - (0.10*totalSal);
        console.log("4:", totalSal);
      }
      return totalSal;
    }
  }
  console.log(Employee.name);
  console.log(Employee.email);
  console.log(Employee.phone);
  console.log(Employee.basicSalary);
  console.log(Employee.totalSalary());



// npm init your folder
// npm i --save-dev readline-sync

//const rl = require("readline-sync");
//const person = {};

//person.name = rl.question("What is your name: ");
//person.email = rl.question("What is your email: ");
//person.phone = rl.question("What is your phone: ");
//person.basicSalary = rl.question("What is your Basic Salary: ");
//console.log(person);
