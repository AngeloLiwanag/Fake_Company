const express = require("express");
const app = express();
var faker = require("faker");

class User {
    constructor() {
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

console.log(new User);
console.log(new Company);

app.get("/api/users/new", (req,res) => { 
    let user = new User;
    res.json({newUser: user})
})  

app.get("/api/company/new", (req,res) => { 
    let company = new Company;
    res.json({newCompany: company})
})  

app.get("/api/company", (req,res) => { 
    let company = {
        user : new User,
        company : new Company
    }
    res.json({myCompany: company})
})  

const server = app.listen(8000, () =>
    console.log(`Listening on port ${server.address().port}`)
)