console.log("horses are BAD")
let horseName = "Coolfella"; //this is a string
horseName = "gamer"; //this name takes over because of placement
let horseAge = 5; //numbers dont need quotes but always use double quotes otherwise
console.log(horseName);
console.log(horseAge);
let isHorseInStable = true; //boolean!!
console.log(isHorseInStable);
isHorseInStable = true;

horseName = "bangie bang the horsey"; //this horse name overwrites others but is its own
console.log(horseName);
const STABLE_MONTHLY_FEE = 10;

console.log(horseName + " is the name of my horse ");
let horseIntroduction = " is the name of my horse! "
console.log(horseName + horseIntroduction)

//let rentIntroduction =" it costs " + STABLE_MONTHLY_FEE + " to board " + horseName
let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} to board ${horseName}`
console.log(rentIntroduction)

//let stableIntroduction =" Welcome to " + horseName + "'s stable :D "
let stableIntroduction = `Welcome to ${horseName}'s stable :D`
console.log(stableIntroduction)

//LAB 2 VVVVV

let horseNickname = "bacon"
let horseNicknameIntro = horseName + " is the name of my horse! and " + horseNickname + " is his nickname. " 
console.log(horseNicknameIntro)


let discount = (STABLE_MONTHLY_FEE *3 - 3)
let discountMessage = `Save 10 percent off THREE whole months which adds up to a total of ${discount} smackaroons.` 
console.log(discountMessage)
