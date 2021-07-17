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
        let regCity = RegExp("^[A-Zaz-z]{4,}$");
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

try {
    let personContact = new Contact('Rosy', 'Rupali', 'sarjapur', 'Bengaluru', 'Karnataka', 234343, "81 7836427756", 'rosy644@yahoo.com')
    let personContact1 = new Contact('Anu', 'Singh', 'kahalgaon', 'Bhagalpur', 'Bihar', 675423, "91 9431634576", 'anu123@gmail.com')
    console.log(personContact.toString());
    console.log(personContact1.toString());
    } catch (e) {
    console.error(e);
}
