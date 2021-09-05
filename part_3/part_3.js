/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log("PART 4");

const parantheses = {
  "[": "]",
  "(": ")",
  "{": "}",
};

const isABalancedString = (string) => {
  // WRITE YOUR CODE BELOW THIS LINE
  const arr = string.split();
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr.pop() !== parantheses[arr.shift()]) {
      return "NO";
    }
  }

  return "Yes";
};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
