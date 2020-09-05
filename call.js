const normalPerson = {
    firstName: 'mostafa',
    lastName: 'kamal',
    salary: 500,
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
    }
}
const friendlyPerson = {
    firstName: 'Rakib',
    lastName: 'Hasan',
    salary: 1000,
}
normalPerson.chargeBill.call(friendlyPerson, 300);// 
console.log(friendlyPerson.salary);
console.log(normalPerson.salary)//not affected

