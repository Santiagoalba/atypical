home = {

    // validarNick(data) {
    //     var flag = true;
    //     if(!/^[A-Za-z]+$/.test(data)){
    //         console.log("nick invalido")
    //         var flag = false;
    //     }
    //     return flag;
    // },


    // validarMail(data) {
    //     var flag = true;    
    //      if (!/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(data)) {
    //          console.log("email invalido");
    //         flag = false;
    //      }
         
    //    return flag;
    //   },

    // validarPass(data){
    //     var flag = true
    //    if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]){8,15}$/.test(data)){
    //        console.log("pass invalida")
    //        flag = false
    //    }
    //    return flag
    // },

     
    // validar(){
    //     let email = document.getElementById("email");
    //     if (home.validarMail(email.value)){
    //         console.log("email valido")
    //     }
    //     let nick = document.getElementById("nick")
    //     if (home.validarNick(nick.value)){
    //         console.log("nick valido")
    //     }
    //     let pass = document.getElementById("pass")
    //     if (home.validarPass(pass.value)){
    //         console.log("pass valida")
    //     }
    // },

    showPopUp(){
        document.querySelector(".signInPopUp").setAttribute("class", "signInPopUp show")
    },

    showPopUpLog(){
        document.querySelector(".logInPopUp").setAttribute("class", "logInPopUp show")
    },

    
    
    hidePopUp(){
        document.querySelector(".signInPopUp").setAttribute("class", "signInPopUp")
    },
    
    hidePopUpLog(){
        document.querySelector(".logInPopUp").setAttribute("class", "logInPopUp")
    },
    
    clickOutside(){
        let abc = document.querySelector('.logInPopUp')
        abc.addEventListener('click', function(e){ 
        if (document.querySelector('.logInForm').contains(e.target)){
        console.log("adentro") 
    } else{ 
        home.hidePopUpLog()
        // Clicked outside the box
        console.log("afuera")
        } 
    });
    },
    clickOutside2(){
        let abc = document.querySelector('.signInPopUp')
        abc.addEventListener('click', function(e){ 
        if (document.querySelector('.signInForm').contains(e.target)){
        console.log("adentro") 
    } else{ 
        home.hidePopUp()
        // Clicked outside the box
        console.log("afuera")
        } 
    });
    },
    toLogIn(){
        document.querySelector(".logInPopUp").setAttribute("class", "logInPopUp show")
        home.hidePopUp()
    },

    toSignUp(){
        document.querySelector(".signInPopUp").setAttribute("class", "signInPopUp show")
        home.hidePopUpLog()
    },
    

}

home.clickOutside()
home.clickOutside2()


const nick = document.getElementById('nick')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (nick.value === '' || nick.value == null) {
//     messages.push('Nick is required')
//   }

//   if (password.value.length <= 6) {
//     messages.push('Password must be longer than 6 characters')
//   }

//   if (password.value.length >= 20) {
//     messages.push('Password must be less than 20 characters')
//   }

//   if (/^[a-zA-Z0-9- ]*$/.test(password.value) === false) {
//       messages.push('Password must only contain numbers and letters')
//   }

//   if (password.value === 'password') {
//     messages.push('Password cannot be password')
//   }

//   if (password2.value !== password.value) {
//       messages.push('Repeat password was not the same as password')
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })


newsSubscriber = document.getElementById("newsletter")
newsEmail = document.getElementById("newsletterEmail")

let subscribedNews = [
    "santiago@gmail.com",
    "pedro@gmail.com",
]


newsSubscriber.addEventListener('submit', () => {
    
    subscribedNews.push(newsEmail.value)
    console.log(subscribedNews, "puto")

})

console.log(subscribedNews, "hola")






let coachsData = [
    {
        id: 0,
        name: "Carlitos",
        surname:"Perez",
        ign: "Carlix",
        game: "Fortnite",
        review: "Master in fortnite metagame 2nd place at world cup Carlitos will teach you from basics to expert, loot, routes, best weapons and how to improve your building",
        price: "$25.00", 
        img: './image/coachs/Carlitos.jpg',
        logo:'./image/coachs/neon.png',
    },
    {
        id: 1,
        name: "Alfredito",
        surname:"Perez",
        ign: "El fredo",
        game: "League of Legends",
        review: "With some cups on his pockets Alfredito mid player for neon team knows everything you need to learn from ganking to counters to endgame you will be able to climb in League",
        price: "$30.00", 
        img: './image/coachs/Alfredito.jpg',
        logo:'./image/coachs/neon.png',
    },
    {
        id: 2,
        name: "Santiaguito",
        surname:"Perez",
        ign: "Straus",
        game: "CS:GO",
        review: "Counter Strike GO star and multiple awards winning known for his ak-47 taps and incredible aim",
        price: "$60.00", 
        img: './image/coachs/Santiaguito.jpg',
        logo: './image/coachs/neon.png',
    },
    {
        id: 2,
        name: "Esteban",
        surname:"Perez",
        ign: "Straus",
        game: "Starcraft 2",
        review: "Esteban knows pretty much everything about starcraft and can teach how to play any race to conquer the enemy",
        price: "$15.00", 
        img: './image/coachs/Santiaguito.jpg',
        logo: './image/coachs/neon.png',
    },
    {
        id: 2,
        name: "Juan",
        surname:"Perez",
        ign: "Straus",
        game: "Apex Legends",
        review:"If you are into agressive style of playing , pushing into enemies and going for the airdrops Juan is the perfect teacher for you",
        price: "$20.00", 
        img: './image/coachs/Santiaguito.jpg',
        logo: './image/coachs/neon.png',
    },
    {
        id: 2,
        name: "Marcos",
        surname:"Perez",
        ign: "Straus",
        game: "Rocket League",
        review: "Grand Champion and professional player one of the fastest ladder climbers in the game can teach you how he does it",
        price: "$40.00", 
        img: './image/coachs/Santiaguito.jpg',
        logo: './image/coachs/neon.png',
    }

]

//     window.onload = function(){

//     let coachs = document.querySelector(".coachs")
//     console.log(coachs)

//     document.getElementById("coach").innerHTML =  `
//         ${coachsData.map(function(coach){
//         return `
//         <div class="coachs_card">
//         <div class="coachs_card_img">
//             <img src="${coach.img}" alt="">
//         </div>
//         <div class="coachs_card_info">
//             <div class="coachs_card_info_player">
//             <p> ${coach.name} "${coach.ign}" ${coach.surname}  </p> <img src="${coach.logo}" alt="">
//             </div>
//             <div class="coachs_card_info_important">
//             <p>${coach.game}</p> <p>Price: ${coach.price}</p>
//             </div>
    
//         </div>
//         </div>
//         `

//         }).join('')}
//     `
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

displayArray = [];

// for (let index = 0; index < 3; index++) {
//     // let addCoach = coachsData[getRandomInt(coachsData.length)]
    
//         displayArray.push(coachsData[getRandomInt(coachsData.length)])
        
//     }


    for (let index = 0; index < 3; index++) {
            
        let addCoach = coachsData[getRandomInt(coachsData.length)]
            if (displayArray.map(function( coach){
                coach.id 
            })!== addCoach.id) {
                console.log(addCoach.id, coach)
                displayArray.push(addCoach)
            } else {
                index--
            }
            
            
        }
    
    
    

    document.getElementById("coach").innerHTML =  `
        ${displayArray.map(function(coach){
        return `
        <div class="coachs_card">
        <div class="coachs_card_img">
            <img src="${coach.img}" alt="">
        </div>
        <div class="coachs_card_info">
            <div class="coachs_card_info_player">
            <p> ${coach.name} "${coach.ign}" ${coach.surname}  </p> <img src="${coach.logo}" alt="">
            </div>
            <div class="coachs_card_info_review"> ${coach.review}</div>
            <div class="coachs_card_info_important">
            <p>${coach.game}</p> <p>${coach.price}</p>
            </div>
    
        </div>
        </div>
        `

        }).join('')}
    `


    


    

      