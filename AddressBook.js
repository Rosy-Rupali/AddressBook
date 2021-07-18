console.log("Welcome to Address Book System");
class Contact
{
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
        let regZip = RegExp("^\\d{6}$");
        if(regZip.test(zip))
        this._zip= zip;
        else throw "Incorrect Zip";
    }
    get phoneNo(){ 
        return this._phoneNo;
     }
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
    toString()
    {
        return "FirstName: "+this.firstName+ ", LastName: "+this.lastName+ ", Address: "+this.address+ ", City: "+this.city+
                ", State: "+this.state+ ", Zip: "+this.zip+ ", PhoneNo: "+this.phoneNo+ ", Email: "+this.email;
    }
}

//Function to add name in addressBook
function addName(addressBook, contact) {
    for(contacts in addressBook){
        if(contacts.firstName==contact.firstName){
            throw 'Name already taken';

        }
    }
    addressBook.push(contact);
}

//Function to update name in addressBook
function updateName(contact, oldName, newName) {
    contact.filter(person => person.firstName == oldName).forEach(person => person.firstName = newName);
}

//Function to delete name in addressBook
function deleteName(contact, name){
    var removeIndex = contact.filter(item=>item.firstName).indexOf(name);
    contact.splice(removeIndex,1);
}

//Function to count the contacts
function countContacts(contact){
    let count= contact.reduce((a, b) => a.concat(b), []).length;
    console.log("Number of contacts is: "+count);
 }

try {
    let personContact = new Contact('Rosy', 'Rupali', 'sarjapur', 'Bengaluru', 'Karnataka', "234343", "81 7836427756", 'rosy644@ya.co.in')
    let personContact1 = new Contact('Anu', 'Singh', 'kahalgaon', 'Bhagalpur', 'Bihar', "675423", "91 9431634576", 'anu123@gm.co.in');
    let personContact2 = new Contact('Harshita', 'Kajal', 'kahalgaon', 'Dhanbad', 'Bihar', "275423", "91 6726565776", 'harshita123@gm.co.in');
    let addressBook = new Array();
    addName(addressBook, personContact);
    addName(addressBook, personContact1);
    addName(addressBook, personContact2);
    updateName(addressBook, "Rosy", "Rashmi");
    deleteName(addressBook,'Anu');
    countContacts(addressBook);
    console.log(addressBook);
    } catch (e) {
    console.error(e);
}