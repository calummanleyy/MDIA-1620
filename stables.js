let horseName = "bangie bang the horsey"; // very first horsie (ever invented) name
let horseAge = 5; // worlds youngest horse
let isHorseInStable = true;

const STABLE_MONTHLY_FEE = 10;
//let statements to introduce da horsie
let horseIntroduction = `${horseName} is the name of my horse!`;
let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} to board ${horseName}`;
let stableIntroduction = `Welcome to ${horseName}'s stable :D`;

console.log(horseIntroduction);
console.log(rentIntroduction);
console.log(stableIntroduction);

let horseNickname = "bacon";
let horseNicknameIntro = `${horseName} is the name of my horse! and ${horseNickname} is his nickname.`;
console.log(horseNicknameIntro);

const totalForThreeMonths = STABLE_MONTHLY_FEE * 3;
const discount = totalForThreeMonths * 0.1;
const totalAfterDiscount = totalForThreeMonths - discount;

let totalMessage = `The total after applying the 10 percent discount for three months is ${totalAfterDiscount} smackaroons.`;
console.log(totalMessage);

console.log(isHorseInStable);

let Strawberry = {
    name: "Strawberry",
    age: 3,
    nickname: "shortcake",
    favoriteSnack: "killerbees",
    monthlyRent: 125,
    introduction() {
        console.log(`This is ${this.name}! Their nickname is ${this.nickname}!`);
    },
};

console.log(`${Strawberry.name} hates ${Strawberry.favoriteSnack}`);

let horses = []; // confusing array stuff to store horsies
let visitorMessage = "Welcome to the stable!";
let latePaymentFee = 15;
let availableStalls = 10; // available stalls in the stable

// Constructor for creating horse objects
function Horse(name, nickname, favoriteTreat, age, monthlyRent, location, uniqueProp1, uniqueProp2) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isOutside = location;
    this.uniqueProp1 = uniqueProp1;
    this.uniqueProp2 = uniqueProp2;

    // this is to introduce my horse
    this.introduce = function () 
    {return `Hi, I'm ${this.name}, also known as ${this.nickname}. I'm ${this.age} years old, and my favorite treat is ${this.favoriteTreat}.`;
    };

    // this is what the horsie is doing
    this.getLocationStatus = function () 
    {return this.isOutside ? `${this.name} is enjoying the outdoors.` : `${this.name} is cozy inside.`;
    };
}

// adding three horsies to the stable
horses.push(
    new Horse("Strawberry", "Shortcake", "Carrots", 4, 125, false, "Loves running", "Has a very shiny coat"),
    new Horse("MidnightDevil", "EVIL", "Apples", 7, 140, true, "HATES loud noises", "Super fast"),
    new Horse("WINTERSTORM", "Storm", "Apples", 3, 110, false, "Shy but friendly", "Has a snowy white mane")
);

// adding NEW horse using an object literal
let newHorse = {
    name: "Milk",
    nickname: "Cow",
    favoriteTreat: "milk",
    age: 500,
    monthlyRent: 130,
    isOutside: true,
    uniqueProp1: "Loves the sun",
    uniqueProp2: "STRONG",
};
horses.push(newHorse);

// hungry property to all horses making them ALL hangry
horses.forEach((horse) => (horse.isHungry = true));

// number of available stalls
availableStalls -= horses.length;

// Log the status of stalls
if (availableStalls <2) {
    console.log("We need to build more stalls");
} else {
    console.log(`We have ${availableStalls} available!`);
}

// Function to calculate late payment fee
function calculateLateFee(rent) {
    return rent + latePaymentFee;
}
console.log(`Late payment fee for Milk: ${calculateLateFee(newHorse.monthlyRent)}`);

// Loop to check for a favorite treat
function findHorseByTreat(treat) {
    for (let horse of horses) {
        if (horse.favoriteTreat === treat) {
            console.log(`${horse.name} loves ${treat}!`);
            return;
        }
        console.log(`${horse.name} does not like ${treat}.`);
    }
}
findHorseByTreat("Apples");

// function used to return horse with nickname
//function getNickname(horseName) {
//let horse = horses.find((h) => h.name === horseName);
//return horse ? horse.nickname : "Horse not found.";
//}
//console.log(getNickname("WINTERSTORM"));

// Function referencing a unique property
function checkUniqueProperty(horseName) {
    let horse = horses.find((h) => h.name === horseName);
    if (horse) {
        if (horse.uniqueProp1.includes("sun")) {
            console.log(`${horse.name} is happiest when it's sunny.`);
        } else {
            console.log(`${horse.name} doesn't have a sunny day preference.`);
        }
    }
}
checkUniqueProperty("Cow");

// Function to move horsies outside
function moveHorsesOutside() {
    horses.forEach((horse) => {
        if (!horse.isOutside) {
            horse.isOutside = true;
            console.log(`${horse.name} has been moved outside to enjoy the sun.`);
        }
    });
}
moveHorsesOutside();

// toggling horse location
horses.forEach((horse) => {
    horse.toggleLocation = function () {
        this.isOutside = !this.isOutside;
        console.log(`${this.name} is now ${this.isOutside ? "outside" : "inside"}.`);
    };
});

// Function to feed my horses
function feedHorses() {
    horses.forEach((horse) => {
        if (horse.isOutside) {
            horse.toggleLocation();
        }
        horse.isHungry = false;
        console.log(`${horse.name} has been fed their favorite treat: ${horse.favoriteTreat}.`);
    });
}
feedHorses();

// Function to move horses inside if it's dark n scary
function moveHorsesInsideAtNight(isDark) {
    if (isDark) {
        horses.forEach((horse) => {
            if (horse.isOutside) {
                horse.toggleLocation();
                console.log(`${horse.name} has been moved inside for the night because it is dark and scary.`);
            }
        });
    }
}
moveHorsesInsideAtNight(true);

//horse image pic
                                     \       ,
                                     |\.--._/|
                                    /\ )  )\\/
                                   /(   \  / \
                                  /(   J `(   \
                                 / ) | _\     /
                                /|)  \  eJ    L
                               |  \ L \   L   L
                              /  \  J  `. J   L
                              |  )   L   \/   \
                             /  \    J   (\   /
           _....___         |  \      \   \```
    ,.._.-'        '''--...-||\     -. \   \
  .'.=.'                    `         `.\ [ Y
 /   /                                  \]  J
Y / Y                                    Y   L
| | |          \                         |   L
| | |           Y                        A  J
|   I           |                       /I\ /
|    \          I             \        ( |]/|
J     \         /._           /        -tI/ |
 L     )       /   /'-------'J           `'-:.
 J   .'      ,'  ,' ,     \   `'-.__          \
  \ T      ,'  ,'   )\    /|        ';'---7   /
   \|    ,'L  Y...-' / _.' /         \   /   /
    J   Y  |  J    .'-'   /         ,--.(   /
     L  |  J   L -'     .'         /  |    /\
     |  J.  L  J     .-;.-/       |    \ .' /
     J   L`-J   L____,.-'`        |  _.-'   |
      L  J   L  J                  ``  J    |
      J   L  |   L                     J    |
       L  J  L    \                    L    \
       |   L  ) _.'\                    ) _.'\
       L    \('`    \                  ('`    \
        ) _.'\`-....'                   `-....'
       ('`    \
        `-.___/  

        // This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
