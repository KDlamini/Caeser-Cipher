//Select all elements to manipulate from the DOM
const text = document.querySelector('.text');
const num = document.querySelector('.num');
const output = document.querySelector('.output');
const btn =  document.querySelector('.btn');
const clearBtn =  document.querySelector('.clear');

function Caesar() {
    //Get the input text to encrypt from the user
    let str = text.value;
    let solved =  "";

    //Iterates over the user's input, checking for the case of each char.
    for (let i = 0; i < str.length; i++) {

        let asciiNum = str[i].charCodeAt();
        const key = Math.abs(Number(num.value));
        let newAscii = 0;  
        
        if (asciiNum>=65 && asciiNum<=90) {

            newAscii = (((asciiNum - 65) + key) % 26) + 65;
            solved += String.fromCharCode(newAscii);  
        }
        else if (asciiNum>=97 && asciiNum<=122) {

            newAscii = (((asciiNum - 97) + key) % 26) + 97;
            solved += String.fromCharCode(newAscii);
        }
         else {
            solved += str[i];
        }
    }

    //Assign encryption result to the output field.
    output.value = solved;
}

//clear all fields
function Clear() {
    text.value = "";
    num.value = 0;
    output.value = "";
}

//Add events to the send and clear buttons for functionality
btn.addEventListener('click', Caesar);
clearBtn.addEventListener('click', Clear);