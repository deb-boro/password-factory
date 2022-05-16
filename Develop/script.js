//  1. How many characters in your password ?
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
  var lowerCaseCharacter = window
    .prompt(
      'Do you want to include lowercase in your password e.g. abcdefgh- answer yes or no',
    )
    .toLowerCase()
  return lowerCaseCharacter
}

var upperCase = function () {
  var upperCaseCharacter = window
    .prompt(
      'Do you want to include uppercase in your password e.g. ABCDEFGH - answer YES/yes or NO/no',
    )
    .toLowerCase()
  return upperCaseCharacter
}

var number = function () {
  var numeric = window
    .prompt(
      'Do you want to include numbers in your password e.g. 01234567 - answer YES/yes or NO/no',
    )
    .toLowerCase()

  return numeric
}

var specialCharacter = function () {
  var specialCharacters = window
    .prompt(
      'Do you want to include special character in your password e.g. !#$%&()*+,- - etc. answer YES/yes or NO/no',
    )
    .toLowerCase()
  return specialCharacters
}

// generating random number using https://net-comber.com/charset.html
var getRandomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}
var getRandomUpperCharacter = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}
var getRandomLowerCharacter = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}
var getSpecialCharacter = function () {
  var spCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  return String.charAt(Math.floor(Math.random() * (30 + 1)))
}

var removeArrayElement = function (array) {
  var i = 0
  while (i < array.length) {
    if (array[i] === false) {
      array.splice(i, 1)
    } else {
      i++
    }
  }
  return array
}

var passwordGenerator = function (
  characterLength,
  lowerCaseLetters,
  upperCaseLetters,
  numeric,
  spCharacter,
) {
  alert(
    'Your choices are : character length - ' +
      characterLength +
      ',' +
      ' lower case - ' +
      lowerCaseLetters +
      ',' +
      ' upper case - ' +
      upperCaseLetters +
      ',' +
      ' numeric- ' +
      numeric +
      ',' +
      ' and Special Character- ' +
      spCharacter,
  )

  var passwordLength = characterLength
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var numericValue = '0123456789'
  var specialCharacter = '!@#$%^&*()_+~`|}{[]:;?>"<,./-=' //total =30
  var password = ''
  var character = ''
  debugger
  while (password.length < passwordLength) {
    if (lowerCaseLetters === 'yes') {
      character += lowerCase.charAt(Math.floor(Math.random() * (26 + 1)))
    }
    if (upperCaseLetters === 'yes') {
      character += upperCase.charAt(Math.floor(Math.random() * (26 + 1)))
    }
    if (numeric === 'yes') {
      character += numericValue.charAt(Math.floor(Math.random() * (10 + 1)))
    }
    if (spCharacter === 'yes') {
      character += specialCharacter.charAt(Math.floor(Math.random() * (30 + 1)))
    }
    password = character
  }

  return password

  // if (lowerCaseLetters === 'yes') {
  //   var isLowerCase = true
  // } else {
  //   isLowerCase = false
  // }

  // if (upperCaseLetters === 'yes') {
  //   var isUpperCase = true
  // } else {
  //   var isUpperCase = false
  // }

  // if (numeric === 'yes') {
  //   var isNumeric = true
  // } else {
  //   var isNumeric = false
  // }

  // if (spCharacter === 'yes') {
  //   var isSpecialCharacter = true
  // } else {
  //   isSpecialCharacter = false
  // }

  // //initial password variable
  // var generatedPassword = ''
  // //create an array of key and value for each type - 'true' and 'false'
  // var typeArray = [isLowerCase, isUpperCase, isNumeric, isSpecialCharacter]

  // console.log(typeArray)

  // console.log(removeArrayElement(typeArray))

  // var newArray = removeArrayElement(typeArray)

  // // countType for counting only the true values
  // var countType = isLowerCase + isNumeric + isSpecialCharacter + isUpperCase
}

var validateCharTypeInput = function () {
  alert('you have to say YES/yes to atleast one character type!!')
}

var getCharacterType = function (characterLength) {
  var charLength = characterLength
  var lowerCaseLetters = lowerCase()
  var upperCaseLetters = upperCase()
  var spCharacter = specialCharacter()
  var numeric = number()

  if (
    lowerCaseLetters === 'no' &&
    upperCaseLetters === 'no' &&
    numeric === 'no' &&
    spCharacter === 'no'
  ) {
    validateCharTypeInput()
    getCharacterType(charLength)
  } else {
    password = passwordGenerator(
      charLength,
      lowerCaseLetters,
      upperCaseLetters,
      numeric,
      spCharacter,
    )
  }
  return password
}

var generatePassword = function () {
  var characterLength = passwordLength()
  var password = getCharacterType(characterLength)

  console.log('.....and the password is : ' + password)
  return password
}

var generateBtn = document.querySelector('#generate')

//  Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')
  passwordText.value = password
}

// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword())
