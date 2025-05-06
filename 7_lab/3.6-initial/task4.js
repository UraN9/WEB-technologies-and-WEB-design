let person = {
    'name': '',
    'sayHello': function (otherName) {
        console.log("Привіт, " + otherName + "! Мене звуть " + this.name);
    },
    'getFullName': function () {
        return this.name + ' ' + this.lastName;
    }
};

person.name = 'Ілля';
person.sayHello("Дмитро");
person.lastName = "Білокінь";
console.log(person.getFullName());