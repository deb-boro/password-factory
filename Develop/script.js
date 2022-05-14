//  1. How many characters in your password ?
alert('Welcome to the password generator factory application!!!')
var passwordLength = function () {
  var lengthPassword = window.prompt(
    'Please enter the length of password you want to generate (it should be between 8 characters and no more than 128 characters). e.g. for password length 9 characters ENTER "9" in the textbox and PRESS "OK".',
  )
  debugger
  if (
    lengthPassword < 8 ||
    lengthPassword > 128 ||
    lengthPassword === ' ' ||
    lengthPassword === null ||
    isNaN(lengthPassword) === true
  ) {
    alert('Please provide a valid input')
    passwordLength()
  }
}
//2. will there be lowercase, uppercase, numbers and special characters ?

var characterType = function () {
  var lowerCase = window.prompt(
    'Do you want to include lowercase in your password e.g. abcdefgh- answer yes or no',
  ).toLowerCase
  var upperCase = window.prompt(
    'Do you want to include uppercase in your password e.g. ABCDEFGH - answer YES/yes or NO/no',
  ).toLowerCase
  var numbers = window.prompt(
    'Do you want to include numbers in your password e.g. 01234567 - answer YES/yes or NO/no',
  ).toLowerCase
  var specialCharacter = window.prompt(
    'Do you want to include special character in your password e.g. !#$%&()*+,- - etc. answer YES/yes or NO/no',
  ).toLowerCase
}

//using https://net-comber.com/charset.html to generate Random Numbers

var randomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}
var randomlowerCaseLetters = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}
var randomUpperCaseLetters = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

var randomSpecialCharacter = function () {
  var specialCharacterList = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'
  var specialCharacter = specialCharacterList.charAt(
    Math.floor(Math.random() * specialCharacterList.length),
  )
}

//

var firstPartPasswordArray = function () {
  var passwordArray = []

  if (characterType.lowerCase === 'yes') {
    passwordArray = passwordArray.push(randomlowerCaseLetters())
  }
  if (characterType.upperCase === 'yes') {
    passwordArray = passwordArray.push(randomUpperCaseLetters())
  }
  if (characterType.numbers === 'yes') {
    passwordArray = passwordArray.push(randomNumber())
  }
  if (characterType.specialCharacter === 'yes') {
    passwordArray = passwordArray.push(randomSpecialCharacter())
  }
  return passwordArray
}

var secondPartPasswordArray = function () {
  var PasswordArrayTwo = []
  for (var i = 0; i <= passwordLength - firstPartPasswordArray().length; i++) {
    var character = ''
    charactersInScope =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~'
    var charactersLength = characters.length
    character = characters.charAt(Math.floor(Math.random() * charactersLength))
    PasswordArrayTwo = PasswordArrayTwo.push(character)
  }

  return PasswordArrayTwo
}
//concatenate 2 arrays and suffle the array and convert it into a string
var generatePassword = function () {
  var passwordArray = firstPartPasswordArray.concat(secondPartPasswordArray)
}
passwordLength()
characterType()

//Get references to the #generate element
var generateBtn = document.querySelector('#generate')

//  Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
