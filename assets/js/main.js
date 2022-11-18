let suspectsArray = [
    {
        name: "mrGreen",
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green",
    },
    {
        name: "drOrchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: " PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "https://i.guim.co.uk/img/media/00e0d30234b685b8bf5f26c0324397756f5753e0/0_0_1912_2419/master/1912.jpg?width=620&quality=45&dpr=2&s=none",
        color: "white"
    },
    {
        name: "profPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designe",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple",
    },
    {
        name: "missScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: 31,
        description: "She is an A- list movie star with a dark past",
        image: " https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg",
        color: "red"
    },
    {
        name: "mrsPeacock",
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: " https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg",
        color: "blue"
    },
    {
        name: "mrMustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
];

let weaponsArray = [
    {
        name: "rope",
        weight: 10,
    },
    {
        name: "knife",
        weight: 8,
    },
    {
        name: "candlestick",
        weight: 2,
    },
    {
        name: "dumbbell",
        weight: 30,
    },
    {
        name: "poisen",
        weight: 2,
    },
    {
        name: "axe",
        weight: 15,
    },
    {
        name: "bat",
        weight: 13,
    },
    {
        name: "trophy",
        weight: 25,
    },
    {
        name: "pistol",
        weight: 20,
    },
];

let roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "BilliardRoom", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

let section = document.getElementById("section1");
let mysterySentP;
let count = 0;

function selectRandom(array) {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
}

function pickMystery() {
    let suspect = selectRandom(suspectsArray);
    let weapon = selectRandom(weaponsArray);
    let room = selectRandom(roomsArray);
    return [suspect, weapon, room];
}

function revealMystery() {
    let mystery = pickMystery();
    let mysterySent = `${mystery[0].firstName} ${mystery[0].lastName} killed ${pickMystery()[0].name} using the ${mystery[1].name} in the ${mystery[2]}.`;
    mysterySentP = document.createElement("p");
    mysterySentP.classList.add("sent");
    mysterySentP.innerHTML = mysterySent;
    createCard(mystery);
    return;
}


function createCard(mystery) {

    let susCard = document.createElement("div");
    susCard.classList.add("susCard");

    // Erstellen der Elemente in der susCard
    let susPicture = document.createElement("img");
    susPicture.src = mystery[0].image;
    susPicture.classList.add("susPic");

    let susName = document.createElement("p");
    susName.classList.add("susName");
    susName.innerHTML = mystery[0].name;
    let susFullName = document.createElement("p");
    susFullName.classList.add("susFullName");
    susFullName.innerHTML = `${mystery[0].firstName} ${mystery[0].lastName}`;
    let susDesc = document.createElement("p");
    susDesc.classList.add("susDesc");
    susDesc.innerHTML = mystery[0].description;

    let weaponCard = document.createElement("div");
    weaponCard.classList.add("weaponCard");

    // Erstellen der WeaopnCard
    let weaponName = document.createElement("p");
    weaponName.classList.add("miniCardP");
    weaponName.innerHTML = mystery[1].name;

    let roomCard = document.createElement("div");
    roomCard.classList.add("roomCard");

    // Erstellen der WeaopnCard
    let roomName = document.createElement("p");
    roomName.classList.add("miniCardP");
    roomName.innerHTML = mystery[2];


    susCard.appendChild(susPicture);
    susCard.appendChild(susName);
    susCard.appendChild(susFullName);
    susCard.appendChild(susDesc);

    weaponCard.appendChild(weaponName);
    roomCard.appendChild(roomName);

    console.log(section);
    if (count > 0) {
        section.removeChild(section.lastElementChild);
        section.removeChild(section.lastElementChild);
        section.removeChild(section.lastElementChild);
        section.removeChild(section.lastElementChild);
    }

    section.appendChild(mysterySentP);
    section.appendChild(susCard);
    section.appendChild(weaponCard);
    section.appendChild(roomCard);
    count++;
};;;