//console.log("horses are BAD")
let horseName = "Coolfella"; //this is a string
horseName = "gamer"; //this name takes over because of placement
let horseAge = 5; //numbers dont need quotes but always use double quotes otherwise
let isHorseInStable = true; //boolean!!
isHorseInStable = true;

horseName = "bangie bang the horsey"; //this horse name overwrites others but is its own
const STABLE_MONTHLY_FEE = 10;

let horseIntroduction = " is the name of my horse! "
//console.log(horseName + horseIntroduction)

//let rentIntroduction =" it costs " + STABLE_MONTHLY_FEE + " to board " + horseName
let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} to board ${horseName}`
//console.log(rentIntroduction)

//let stableIntroduction =" Welcome to " + horseName + "'s stable :D "
let stableIntroduction = `Welcome to ${horseName}'s stable :D`
//console.log(stableIntroduction)

//LAB 2 VVVVV

let horseNickname = "bacon"
let horseNicknameIntro = horseName + " is the name of my horse! and " + horseNickname + " is his nickname. " 
console.log(horseNicknameIntro)


const totalForThreeMonths = STABLE_MONTHLY_FEE * 3; // Total for three months
const discount = totalForThreeMonths * 0.1; // 10% discount
const totalAfterDiscount = totalForThreeMonths - discount; // Total after discount

let totalMessage = `The total after applying the 10 percent discount for THREE whole months is ${totalAfterDiscount} smackaroons.`;
console.log(totalMessage);
