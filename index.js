// 1 Challange: reversere a string Trenton to notnerT

function stringReversal(str) {
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    // let revString = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     console.log(revString + str[i]);
    //     revString = revString + str[i];
    // }
    // return revString;

    // I am returning a string so I need a variable to retunr the string

    // let revString = '';

    // Use a for loop to loop through the length of the characters
    // I need the exact ammount of character So I subtract the string 
    // lenght by one and then I itterate over the charaters in reverse
    // for (let i = 0; i <= str.length - 1; i++) {

    // str[i] is the word that is being passed into the function and
    // I am attaching the i iterator index to the word we are working with
    // and I the the characters to the revSting variable one at a time
    //     console.log(str[i] + revString);
    //     revString = str[i] + revString;
    // }

    // return revString;

    //     let revString = '';
    //     for (let char of str) {
    //         console.log(char);
    //         revString = char + revString;
    //     }

    let revString = '';
    str.split('').forEach(char => {
        revString = char + revString;
    });
    return revString;
}

console.log(stringReversal('Trenton'));