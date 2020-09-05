const normalPerson = {
    firstName: 'Mostafa',
    lastName: 'Shelim',
    salary: 500,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary -= amount;
        return this.salary;
    }
}
console.log(normalPerson.getFullName());
normalPerson.chargeBill(100);// 
console.log(normalPerson.salary);// salary = 500 na hoye eta 400 dekhabe