//  1. How many characters in your password ?
alert('Welcome to the password generator factory application!!!')

var passwordLength = function () {
  var lengthPassword = window.prompt(
    'Please enter the length of password you want to generate (it should be between 8 characters and no more than 128 characters). e.g. for password length 9 characters ENTER "9" in the textbox and PRESS "OK".',
  )

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
  console.log('password length is:' + lengthPassword)
  return lengthPassword
}

//2. will there be lowercase, uppercase, numbers and special characters ?
var lowerCase = function () {
  var lowerCase = window
    .prompt(
      'Do you want to include lowercase in your password e.g. abcdefgh- answer yes or no',
    )
    .toLowerCase()
  return lowerCase
}

var upperCase = function () {
  var upperCase = window
    .prompt(
      'Do you want to include uppercase in your password e.g. ABCDEFGH - answer YES/yes or NO/no',
    )
    .toLowerCase()
  return upperCase
}

var number = function () {
  var numbers = window
    .prompt(
      'Do you want to include numbers in your password e.g. 01234567 - answer YES/yes or NO/no',
    )
    .toLowerCase()

  return numbers
}

var specialCharacter = function () {
  var specialCharacter = window
    .prompt(
      'Do you want to include special character in your password e.g. !#$%&()*+,- - etc. answer YES/yes or NO/no',
    )
    .toLowerCase()
  return specialCharacter
}

var checkCharacterTypeInScope = function (characterType) {
  if (characterType === 'yes') {
    return true
  }
}

var verifyForNumeric = function (password) {
  for (var i = 0; i < password.length; i++) {
    eachCharacter = password.charAt(i)
    if (!isNaN(eachCharacter) == true) {
      return true
    }
  }
}

var verifyForUpperCase = function (password) {
  for (var i = 0; i < password.length; i++) {
    eachCharacter = password.charAt(i)
    if (eachCharacter === eachCharacter.toUpperCase()) {
      return true
    }
  }
}

var verifyForLowerCase = function (password) {
  for (var i = 0; i < password.length; i++) {
    eachCharacter = password.charAt(i)
    if (eachCharacter === eachCharacter.toLowerCase()) {
      return true
    }
  }
}

var verifySpecialCharacter = function (password) {
  spChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  return spChar.test(password)
}

var generatePassword = function () {
  var passwordSize = passwordLength()
  debugger
  var character = ''
  for (var i = 0; i < passwordSize; i++) {
    charactersInScope =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
    character += charactersInScope.charAt(
      Math.floor(Math.random() * charactersInScope.length),
    )
  }

  if (checkCharacterTypeInScope(lowerCase()) == true) {
    while (verifyForLowerCase(character) == false) {
      generatePassword()
    }
  } else {
    while (verifyForLowerCase(character) == true) {
      generatePassword()
    }
  }

  if (checkCharacterTypeInScope(upperCase()) == true) {
    while (verifyForUpperCase(character) == false) {
      generatePassword()
    }
  } else {
    while (verifyForUpperCase(character) == true) {
      generatePassword()
    }
  }
  if (checkCharacterTypeInScope(number()) == true) {
    while (verifyForNumeric(character) == false) {
      generatePassword()
    }
  } else {
    while (verifyForNumeric(character) == true) {
      generatePassword()
    }
  }
  if (checkCharacterTypeInScope(specialCharacter()) == true) {
    while (verifySpecialCharacter(character) == false) {
      generatePassword()
    }
  } else {
    while (verifySpecialCharacter(character) == true) {
      generatePassword()
    }
  }

  console.log('Password is : ' + character)
  return character
}

// //Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// //  Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword())
