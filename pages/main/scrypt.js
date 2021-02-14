/* burger menu */

(function () {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    const body = document.querySelector("body");
    const content = document.querySelector(".overlay");
    const logoBurgerMenu = document.querySelector(".logo__link-burger");
    burgerItem.addEventListener("click", () => {
        if ( menu.classList.contains( "navbar_active" ) ) {
            menu.classList.remove("navbar_active");
            burgerItem.classList.remove("header__burger_active");
            logo.classList.remove("logo_active");
            body.classList.remove("body_active");
            content.classList.remove("overlay_active");
            logoBurgerMenu.classList.remove("logo__link-burger_active");
        } else {
            menu.classList.add("navbar_active");
            burgerItem.classList.add("header__burger_active");
            logo.classList.add("logo_active");
            body.classList.add("body_active");
            content.classList.add("overlay_active");
            logoBurgerMenu.classList.add("logo__link-burger_active");
        }
    });

    
    content.addEventListener("click", () => {
        if ( content.classList.contains("overlay_active") ) {
            menu.classList.remove("navbar_active");
            burgerItem.classList.remove("header__burger_active");
            logo.classList.remove("logo_active");
            body.classList.remove("body_active");
            content.classList.remove("overlay_active");
            logoBurgerMenu.classList.remove("logo__link-burger_active");
        }});
    

}());

/* slider */
const petsName = document.querySelectorAll(".our-friends__name");
const petsImage = document.querySelectorAll(".our-friends__image");
const petsButton = document.querySelectorAll(".our-friends__slider-button");
const petsCards = document.querySelectorAll(".our-friends__item");


let pets = [{
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }];
let newPets = pets;
function createPetsList() {
    for (let i=pets.length; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * i);
        const randElem = newPets.splice(randIndex, 1)[0];
        newPets.push(randElem);
    }
};  

createPetsList();

function changePets() {
    for (let i = 0; i < petsName.length; i++) {
        const nowPets = newPets.splice(i, 1)[0];
        newPets.push(nowPets);
        let petsImageName = newPets[i].name.toLowerCase();
        petsName[i].textContent = newPets[i].name
        petsImage[i].innerHTML = `<img src="../../assets/images/pets-${petsImageName}.png" alt="${newPets[i].name}">`;
    }
};

function animationChangePets() {
    for (let i = 0; i < petsCards.length; i++) {
      petsCards[i].classList.add("our-friends__item_pets-slider");
    }

    setTimeout(hideClass, 500);
};

function hideClass() {
    for (let i = 0; i < petsCards.length; i++) {
      petsCards[i].classList.remove("our-friends__item_pets-slider");
    }
};

petsButton.forEach(button => button.addEventListener( "click", changePets) );
petsButton.forEach(button => button.addEventListener( "click", animationChangePets) );

/* Modal */
const content = document.querySelector(".overlay");
const modalWindow = document.querySelector(".modalWindow");
const body = document.querySelector("body");
let namePet;
let wrapper__modal = document.createElement("div");
let closeModalButton = document.createElement("div");
let wrapper__button = document.createElement("div");
let modal = document.createElement("div");
let modal__image = document.createElement("span");
let modal__content = document.createElement("div");
let modal__name = document.createElement("div");
let modal__breed = document.createElement("div");
let modal_info = document.createElement("div");
let modal__list = document.createElement("ul");
let modal__item_first = document.createElement("li");
let modal__item_second = document.createElement("li");
let modal__item_firth = document.createElement("li");
let modal__item_fourth = document.createElement("li");


function addClassToModal() {
  wrapper__modal.classList.add("wrapper__modal");
  closeModalButton.classList.add("closeModalButton");
  wrapper__button.classList.add("wrapper__button");
  modal.classList.add("modal");
  modal__image.classList.add("modal__image");
  modal__content.classList.add("modal__content");
  modal__name.classList.add("modal__name");
  modal__breed.classList.add("modal__breed");
  modal_info.classList.add("modal__info");
  modal__list.classList.add("modal__list");
  modal__item_first.classList.add("modal__item");
  modal__item_second.classList.add("modal__item");
  modal__item_firth.classList.add("modal__item");
  modal__item_fourth.classList.add("modal__item");
};

function createModal() {
  addClassToModal(); 
  wrapper__modal.append(modal);
  modal.append(modal__image);
  modal.append(modal__content);
  modal__content.append(modal__name);
  modal__content.append(modal__breed);
  modal__content.append(modal_info);
  modal__content.append(modal__list);
  modal__list.append(modal__item_first);
  modal__list.append(modal__item_second);
  modal__list.append(modal__item_firth);
  modal__list.append(modal__item_fourth);
  wrapper__button.append(closeModalButton);
  content.append(wrapper__button);
  modalWindow.append(wrapper__modal);
  addContentToModal()
  
};

function addContentToModal() {
  let targetPet = []
  for (let pet of pets) {
    if (pet.name === namePet) {
      targetPet = pet;
    }
  }
  modal__name.innerHTML = `${namePet}`;
  let nameImage = namePet.toLowerCase();
  modal__image.innerHTML = `<img src="../../assets/images/pets-${nameImage}.png" alt="${namePet}">`;
  modal__breed.innerHTML = `${targetPet.type}: ${targetPet.breed}`;
  modal_info.innerHTML = `${targetPet.description}`;
  modal__item_first.innerHTML = `<span><strong>Age: </strong>${targetPet.age}</span>`;
  modal__item_second.innerHTML = `<span><strong>Inoculations: </strong>${targetPet.inoculations}</span>`;
  modal__item_firth.innerHTML = `<span><strong>Diseases: </strong>${targetPet.diseases}</span>`;
  modal__item_fourth.innerHTML = `<span><strong>Parasites: </strong>${targetPet.parasites}</span>`;
  closeModalButton.innerHTML = `<img src="../../assets/icons/modal_close_button.svg" alt="closebutton"></img>`
};

function openModal() {
  createModal()
  content.classList.add("overlay_active");
  body.classList.add("body_active");
  modalWindow.classList.add("modalWindow_active");
  closeModalButton.classList.add("closeModalButton_active");
};

function closeModal() {
  modalWindow.classList.remove("modalWindow_active");
  content.classList.remove("overlay_active");
  closeModalButton.classList.remove("closeModalButton_active");
  body.classList.remove("body_active");
};

function addHoverCloseButton() {
  closeModalButton.classList.add("closeModalButton_hover")
};

function removeHoverCloseButton() {
  closeModalButton.classList.remove("closeModalButton_hover")
};

petsCards.forEach(card => card.addEventListener("click", () => {
  let children = card.children;
  for (let i=0; i < children.length; i++){
  namePet = children[1].textContent
  }
}));
petsCards.forEach(card => card.addEventListener("click", openModal));
content.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);
closeModalButton.addEventListener("mouseover", addHoverCloseButton);
closeModalButton.addEventListener("mouseout", removeHoverCloseButton);
content.addEventListener("mouseover", addHoverCloseButton);
content.addEventListener("mouseout", removeHoverCloseButton);

/* buttons */

const makeFriendsButton = document.querySelector(".start-screen__information-button");
makeFriendsButton.addEventListener("click", () => {
    document.location = '../pets/pets.html'
})

const ourFriendButton = document.querySelector(".our-friends__main-button");
ourFriendButton.addEventListener("click", () => {
    document.location = '../pets/pets.html'
})