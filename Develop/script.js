// Assignment Code
var generateBtn = document.querySelector("#generate");


console.log (generatePassword) {
  passwordLenth,
  includeSpecial,
  includeLowercase,
  includeUppercase,
  ) {

    let characterOptions=[]

    let lowercase= ["a","b","c","d"];
    let uppercase= ["A","B","C","D"];
    let special= ["!","@","#","$"];
    
    if (includeSpecial){
      characterOptions= characterOptions.concat(special);

    }

    if (uppercase){
      characterOptions= characterOptions.concat(uppercase);

    }

    if (lowercase){
      characterOptions= characterOptions.concat(lowercase);

    }
    
    
    let res= ""
  
      for (var i = 0; i <passwordLenth; i++) {
        let randomIndex = Math.floor(Math.random()) *characterOptions
          res += characterOptions[randomIndex]

    }
      
      
      return res

}
// Write password to the #password input
console.log (writePassword) {
      let passwordLenth =10;
      let includeSpecial=true;
      let includeLowercase=true;
      let includeUppercase=false;

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
