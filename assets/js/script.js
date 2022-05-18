// Obtain input for password length
var passwordLength = function () {
  var lengthPassword = window.prompt(
    'ENTER the length of password btw 8 to 128 characters. e.g. for password length 9 characters ENTER "9" in the textbox and PRESS "OK".',
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

//Obtain input for lowercase, uppercase, numbers and special characters
var lowerCase = function () {
  var lowerCaseCharacter = window
    .prompt(
      'Do you want to include lowercase in your password e.g. abcdefgh- answer YES/yes or No/no',
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

//3. Generates password based on the character type and password length input
var passwordGenerator = function (
  characterLength,
  lowerCaseLetters,
  upperCaseLetters,
  numeric,
  spCharacter,
) {
  // Displaying the character type option selected by user
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

  // initializing the password strings in scope for different character type
  var passwordLength = characterLength
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var numericValue = '0123456789'
  var specialCharacter = '!@#$%^&*()_+~`|}{[]:;?>"<,./-=' //total =30
  var password = ''
  var character = ''

  //while loop to generate the password string
  while (password.length < passwordLength) {
    if (lowerCaseLetters === 'yes' && character.length < passwordLength) {
      character += lowerCase.charAt(Math.floor(Math.random() * (26 + 1)))
    }
    if (upperCaseLetters === 'yes' && character.length < passwordLength) {
      character += upperCase.charAt(Math.floor(Math.random() * (26 + 1)))
    }
    if (numeric === 'yes' && character.length < passwordLength) {
      character += numericValue.charAt(Math.floor(Math.random() * (10 + 1)))
    }
    if (spCharacter === 'yes' && character.length < passwordLength) {
      character += specialCharacter.charAt(Math.floor(Math.random() * (30 + 1)))
    }
    password = character
  }

  var a = password.split('')

  for (var i = 0; i < a.length; i++) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
  return a.join('')
}

//Alert added in case user says no to all character type
var validateCharTypeInput = function () {
  alert('you have to say YES/yes to atleast one character type!!')
}

//2. Capture character type input and password
var getCharacterType = function (characterLength) {
  var charLength = characterLength
  var lowerCaseLetters = lowerCase() // input for character type
  var upperCaseLetters = upperCase()
  var spCharacter = specialCharacter()
  var numeric = number()

  //verify at least one character type is selected by user
  if (
    lowerCaseLetters === 'no' &&
    upperCaseLetters === 'no' &&
    numeric === 'no' &&
    spCharacter === 'no'
  ) {
    validateCharTypeInput() //alert for not selecting any character type option
    getCharacterType(charLength) // recalling the function to capturing the input again
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

// 1. Generate Password main function
var generatePassword = function () {
  var characterLength = passwordLength() //capture input for character length
  var password = getCharacterType(characterLength) //call function for character type input and password

  console.log('.....and the password is : ' + password)
  return password
}

//*****************************cloned starter code *******************************//
var generateBtn = document.querySelector('#generate')

//  Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')
  passwordText.value = password
}

// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword())
//******************************************************************************** */
