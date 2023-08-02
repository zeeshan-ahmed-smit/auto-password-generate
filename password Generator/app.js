const passInput = document.getElementById('passInput');
const copyText = document.getElementById('copyText');
const passRead = document.getElementById('passRead');
const upperCaseCheckBox = document.getElementById('upperCase');
const lowerCaseCheckBox = document.getElementById('lowercase');
const numberCheckBox = document.getElementById('numbers');
const specialCharCheckBox = document.getElementById('specialChar');
const passGenBtn = document.getElementById('passGenBtn');

var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var specialChars = '!@#$%^&*()_+`-={}[]|:;"<>,.?/';


//get random letters
let getRandomData = (data) => {
    return data[Math.floor(Math.random() * data.length)]
};

//get random password
let GenRandomPassword = (password = '') => {
    try {
        if (upperCaseCheckBox.checked) {
            password += getRandomData(upperCaseLetters);
        }
        if (lowerCaseCheckBox.checked) {
            password += getRandomData(lowerCaseLetters);
        }
        if (numberCheckBox.checked) {
            password += getRandomData(numbers);
        }
        if (specialCharCheckBox.checked) {
            password += getRandomData(specialChars);
        }
        if (password.length < passInput.value) {
            return GenRandomPassword(password);
        }
        let passStr = cateString(password, passInput.value);
        if (passInput.value < 4 || passInput.value > 15) {
            alert("Your Password Must Be At Least 4 Characters Long OR 15 Characters Short");
        } else {
            passRead.value = passStr
        }

        //copy text function
        copyText.onclick = () => {
            navigator.clipboard.writeText(passStr);
            copyText.innerHTML = "Copied!"
            setTimeout(() => {
                copyText.innerHTML = "Copy"
            }, 2000);
        };

    } catch (error) {
        console.log(error);
        passRead.value = "";
        alert("Select at last one field");
    }


};


passGenBtn.addEventListener('click', () => {
    GenRandomPassword();
});


let cateString = (str, num) => {
    console.log(str, num)
    if (str.length > num) {
        let value = str.slice(0, num)
        return value
    }
    else {
        return str;
    }
}
