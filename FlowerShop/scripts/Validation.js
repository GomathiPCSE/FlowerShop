
function validateForm() {
    var cardNumber = document.myForm.cardNumber.value;
    var securityCode = document.myForm.securityCode.value;
    var month = document.myForm.month.value;
    var year = document.myForm.year.value;
    var name = document.myForm.name.value;
    var address = document.myForm.address.value;
    var city = document.myForm.city.value;
    var postCode = document.myForm.PostCode.value;
    var country = document.myForm.country.value;
    var telephone = document.myForm.Telephone.value;
    var fax = document.myForm.Fax.value;
    var email = document.myForm.Email.value;
    var status = true;

    //Validation for Card Number
    if (cardNumber == "") {         //Card number cannot be null
        document.getElementById("txtCardNumber").innerHTML = "Please Enter a card number";
        status = false;
    }
    else {
        var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;    //Card number must be 16 digit
        if (!cardNumber.match(regex)) {
            document.getElementById("txtCardNumber").innerHTML = "Please Enter a valid card number";
            status = false;
        } else {
            document.getElementById("txtCardNumber").innerHTML = "";
            
        }
    }

    //Validation for Security Code
    if (securityCode == "") {       //Security code cannot be null
        document.getElementById("txtSecurityCode").innerHTML = "Please Enter a security code";
        status = false;
    }
    else {
        var regex = /[0-9]{3}/;     //Security code must be 3 digit
        if (!securityCode.match(regex)) {
            document.getElementById("txtSecurityCode").innerHTML = "Please Enter a valid security code";
            status = false;
        } else {
            document.getElementById("txtSecurityCode").innerHTML = "";
            
        }
    }

    //Validation for Expiry date
    if (month == "" || year == "") {    //Expiry date cannot be null
        document.getElementById("txtExpiry").innerHTML = "Please Select a Expiry date";
        status = false;
    }
    else {
        document.getElementById("txtExpiry").innerHTML = "";
    }

    //Validation for Cardholder's Name
    if (name == "") {           //Cardholder's name cannot be null
        document.getElementById("txtName").innerHTML = "Please Enter a Name";
        status = false;
    }
    else {
        var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (!name.match(regex)) {
            document.getElementById("txtName").innerHTML = "Please Enter a valid Name";
            status = false;
        } else {
            document.getElementById("txtName").innerHTML = "";
           
        }
    }

    //Validation for Address
    if (address == "") {        //Address cannot be null
        document.getElementById("txtAddress").innerHTML = "Please Enter a Address";
        status = false;
    }
    else {
        var regex = /^[a-zA-Z0-9\s,'-]*$/;
        if (!address.match(regex)) {
            document.getElementById("txtAddress").innerHTML = "Please Enter a valid Address";
            status = false;
        } else {
            document.getElementById("txtAddress").innerHTML = "";
            
        }
    }

    //Validation for City
    if (city == "") {       //City cannot be null
        document.getElementById("txtCity").innerHTML = "Please Enter a City";
        status = false;
    }
    else {
        var regex = /^[a-zA-Z]*$/;
        if (!city.match(regex)) {
            document.getElementById("txtCity").innerHTML = "Please Enter a valid City";
            status = false;
        } else {
            document.getElementById("txtCity").innerHTML = "";
            
        }
    }

    //Validation for PostCode
    if (postCode == "") {       //Post code cannot be null
        document.getElementById("txtPostCode").innerHTML = "Please Enter a Post code";
        status = false;
    }
    else {
        var regex = /[0-9]{6}/;     //Post code must be 6 digit
        if (!postCode.match(regex)) {
            document.getElementById("txtPostCode").innerHTML = "Please Enter a valid Post code";
            status = false;
        } else {
            document.getElementById("txtPostCode").innerHTML = "";
            
        }
    }

    //Validation for Country
    if (country == "") {        //Country cannot be null
        document.getElementById("txtCountry").innerHTML = "Please select a country";
        status = false;
    } else {
        document.getElementById("txtCountry").innerHTML = "";
    }
    //Validation for Telephone
    if (telephone == "") {     
        document.getElementById("txtTelephone").innerHTML = "";
    }
    else {
        if (!telephone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)) { //Telephone number must be 10 digit
            document.getElementById("txtTelephone").innerHTML = "Please Enter a valid Telephone number";
            status = false;
        } else {
            document.getElementById("txtTelephone").innerHTML = "";
        }
    }

    //Validation for Fax
    if (fax == "") {
        document.getElementById("txtFax").innerHTML = "";
    }
    else {
        if (!fax.match(/^\+?[0-9]{6,}$/)) {     //Fax must be 6 digit
            document.getElementById("txtFax").innerHTML = "Please Enter a valid Fax";
            status = false;
        }
        else {
            document.getElementById("txtFax").innerHTML = "";
        }
    }

    //Validation for Email
    if (email == "") {          //Email cannot be null
        document.getElementById("txtEmail").innerHTML = "Please Enter a Email id";
        status = false;
    } else {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(regex)) {
            document.getElementById("txtEmail").innerHTML = "Please Enter a valid Email id";
            status = false;
        } else {
            document.getElementById("txtEmail").innerHTML = "";
        }
    }

    if (status)
        alert("Payment Successfull");
}




