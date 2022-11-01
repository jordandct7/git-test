/***************JS Fundamentals**************
 * == loose equality
 * === strict equality
 * strict equality cares about data types 
 * "2" is not === 2 because one is a string
 * != mean not equals
 * !== strict not equals
 * > < >= <= -Greater than, Less than, Less than , Greater than or equals to 
 * When comparing strings, the letter of the alphabet is compared alphabetically
 * a < z is true
 * && || !
 * ! not equals or "logical not": !true returns false, !false returns true
 * 
 * !bagel returns truthy
 * all values can be converted to negative values
 * 
 * Type coercion is when a data type implicitly converts to a string 
 * The logical not (!) operator will coerce the type of any non-boolean operand to true or false for evaluation
 * if the boolean value of the operand is considered true then that operand is considered truthy
 * if the boolean value of the operand is considered false then that operand is considered falsy
 * 
 * Rules for converting to Boolean: Any value that is 0, "", undefined, null, nan is converted to false/falsy
 * all other values are converted to true/truthy
 * 
 * to convert a value to boolean use !!
 * 
 * && operator takes 2 operands and check if both are truthy. Will return truthy if both are truthy
 * falsy if one or both are false
 * Return value of logical & is not always true or false. If you compare two truthy values that are truthy then the first truthy will be returned
 * If one or both are falsy, the first falsy value will be returned
 * 
 * true || false will return true
 * true || true will return true
 * true || false will return true
 * false || false will return false
 * 
 * using non-boolean values will return first truthy value
 * 
 */