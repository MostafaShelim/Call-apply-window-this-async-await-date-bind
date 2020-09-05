const normalPerson = {
    firstName: 'mostafa',
    lastName: 'kamal',
    salary: 500,
    chargeBill: function(amount, tax){
        console.log(this);
        this.salary = this.salary - amount - tax;
    }
}
const friendlyPerson = {
    firstName: 'Rakib',
    lastName: 'Hasan',
    salary: 1000,
}
normalPerson.chargeBill.apply(friendlyPerson, [300, 30]);// 
console.log(friendlyPerson.salary);
console.log(normalPerson.salary)//not affected

