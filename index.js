const outputText = document.getElementById("output-text")
const wordBtn = document.getElementById("word-btn")
const emailBtn = document.getElementById("email-btn")
const descBtn = document.getElementById("desc-btn")
const phoneBtn = document.getElementById("phone-btn")
const pwdBtn = document.getElementById("pwd-btn")

const textOutput = (val) => {
    outputText.value = val
    navigator.clipboard.writeText(val)
}

const generateRandomWord = () => {

    const len = Math.floor((Math.random()*6))+3
    const capital_dia_codes_arr = [201, 209, 220]
    const small_dia_codes_arr = [233, 241, 252]
    let randomWord = ''
    const firstLetter = Math.floor(Math.random()*29) + 62 // First letter should be capital
	
	// Capital letters start from ASCII code 65. If firstLetter is between 62/63/64, a diacritical letter is selected from capital_dia_codes_arr
    randomWord += (firstLetter > 64) ? String.fromCharCode(firstLetter) : String.fromCharCode(capital_dia_codes_arr[firstLetter-62])

    for(let i = 1; i < len; i++){
        const randomLetter = Math.floor(Math.random()*29) + 94
		
		// Small letters start from ASCII code 97. If randomLetter is between 94/95/96, a diacritical letter is selected from small_dia_codes_arr
        randomWord += (randomLetter > 96) ? String.fromCharCode(randomLetter) : String.fromCharCode(small_dia_codes_arr[randomLetter-94])    
    }
    localStorage.setItem("name", randomWord)
    return randomWord
     
}

wordBtn.addEventListener("click", () => {
    const randomWord = generateRandomWord()
    textOutput(randomWord)
})

descBtn.addEventListener("click", () => {
    const len = Math.floor((Math.random()*17))+3 // Length of sentence is between 3 and 20
    console.log(len)
    let randomSentence = ''
    for(let i = 0; i < len; i++){
        randomSentence += generateRandomWord() + " "
    }
    randomSentence += "!!"
    textOutput(randomSentence)
})

emailBtn.addEventListener("click", () => {
    const nameFromLocalStorage = localStorage.getItem("name")
    const randomSuffix = "_" + String(Math.floor((Math.random()*900))+100) + "@mail.com" // Just adding a random number in the email
	
	// Email id will be same as last random word generated, if it exists in local storage.
    const randomEmail = nameFromLocalStorage ? nameFromLocalStorage + randomSuffix : generateRandomWord() + randomSuffix
    localStorage.clear()
    textOutput(randomEmail)
})

phoneBtn.addEventListener("click", () => {
    const len = Math.floor((Math.random()*4))+7 // Phone number length is between 7 and 10
    let randomPhone = '1' // Phone number will always start from 1
    for(let i = 1; i < len; i++){
        randomPhone += Math.floor((Math.random()*9))+1
    }
    textOutput(randomPhone)
})

pwdBtn.addEventListener("click", () => {
    textOutput("Password@123") // Hardcoded password
})