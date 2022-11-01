/*********If Else Notes*/

let dogSits = true
let  dogGetsTreat
if (dogSits === true) {
    dogGetsTreat = true;
}

/****Syntax
 * if (condition) {
 * }
*
*can also write:
if (dogSits) {
       dogGetsTreat = true; 
}
if (dogSits === false)
if (!dogSits)

*/

let roll = 1;
if (roll === 1 || roll === 6) {
    console.log("you win");
}
//may need to add additional parenthesis
if ((roll === 1) || (roll === 6)) {
    console.log("you win");
}

//only reached else if if the condition is falsy inside first if
if ((roll === 1) || (roll === 6)) {
    console.log("you win");
} else if (roll === 3) {
    console.log("roll again");
}

//can just have if else, 
//if else if else
