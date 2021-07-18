console.log("Welcome to Address Book System");
var prompt = require('prompt-sync')();
class Contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;
    constructor(...params)
    {
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNo = params[6]
        this.email = params[7]
    }

    
    get firstName(){ 
        return this._firstName;
     }
    set firstName(firstName)
    {
        let regFirstName = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regFirstName.test(firstName))
        this._firstName = firstName
        else throw "Incorrect FirstName";
    }
    get lastName(){ 
        return this._lastName;
     }
    set lastName(lastName)
    {
        let regLastName = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regLastName.test(lastName))
        this._lastName= lastName
        else throw "Incorrect LastName";
    }
    get address(){ 
        return this._address;
     }
    set address(address)
    {
        let regAddress = RegExp("^[A-Za-z0-9]{4,}$");
        if(regAddress.test(address))
        this._address = address;
        else throw "Incorrect address";
    }
    get city(){ 
        return this._city;
     }
    set city(city)
    {
        let regCity = RegExp("^[A-Za-z]{4,}$");
        if(regCity.test(city))
        this._city = city;
        else throw "Incorrect city name"
    }
    get state(){ 
        return this._state;
     }
    set state(state)
    {
        let regState = RegExp("^[A-Za-z]{4,}$");
        if(regState.test(state))
        this._state = state;
        else throw "Incorret state name";
    }
    get zip(){ 
        return this._zip;
     }
    set zip(zip)
    {
        let regZip = RegExp("^\\d{3}\\s\\d{3}$");
        if(regZip.test(zip))
        this._zip= zip;
        else throw "Incorrect Zip";
    }
    get phoneNo(){ 
        return this._phoneNo;
     }
    /**
     * @param {string} phoneNo
     */
    set phoneNo(phoneNo)
    {
        let regPhoneNo = RegExp("^[1-9]{2}\\s[0-9]{10}$");
        if(regPhoneNo.test(phoneNo))
        this._phoneNo= phoneNo;
        else throw "Incorect phone number";
    }
    get email(){ 
        return this._email;
     }
    set email(email)
    {
        let regEmail = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})$");
        if(regEmail.test(email))
        this._email = email;
        else throw "Incorrect email id";
    }

    createContact() {
        this.firstName = prompt('Enter the first name');
        this.lastName = prompt('Enter the last name');
        this.address = prompt('Enter the address');
        this.city = prompt('Enter the city');
        this.state = prompt('Enter the state');
        this.zip = prompt('Enter the zipcode');
        this.phoneNo = prompt('Enter the phone number');
        this.email = prompt('Enter the email');
        let contact = new Contact(this.firstName, this.lastName, this.address, this.city, this.state, this.zip,
            this.phoneNo, this.email);
        return contact;
    
    }
    toString()
    {
        return "FirstName: "+this.firstName+ ", LastName: "+this.lastName+ ", Address: "+this.address+ ", City: "+this.city+
                ", State: "+this.state+ ", Zip: "+this.zip+ ", PhoneNo: "+this.phoneNo+ ", Email: "+this.email;
    }
}


//UC3 - adding contact to the array of addressbook
var addressBook = new Array();
function addContact(contact) {
    addressBook.push(contact);
}
let contact = new Contact();
addContact(contact.createContact());
console.log(addressBook);

//UC4 - Editing the the contact details if the contact name already exists
function editContact(name) {
    addressBook.filter(c => (c.firstName + c.lastName == name)).forEach(c => editDetails(c));
}
function editDetails(contact) {
    var choice = parseInt(prompt('Enter what u wish to do\n1.Update phoneNumber\n2.Update Address\n3.Update email'));
    switch (choice) {
        case 1:
            var phone = prompt('Enter new phone number');
            contact.phoneNo = phone;
            break;
        case 2:
            var address = prompt('Enter new address');
            contact.address = address;
            break;
        case 3:
            var email = prompt('Enter new email');
            contact.email = email;
            break;
    }
}