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
        let abc = document.querySelector('.signInPopUp');
        abc.addEventListener('click', function(e){ 
        if (!(document.querySelector('.signInForm').contains(e.target))){
        console.log("afuera", e);
        home.hidePopUp();
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
    const form = document.querySelector('.form')
    // const errorElement = document.querySelector('.errorMessages')
    const errorElement = $('.errorMessages')

    form.addEventListener('submit', (e) => {
        errorElement.html( '' )
        let messages = []
        const nameRegExp = /[A-Za-z]{3,20}/
        const passRegExp = /^[a-zA-Z]\w{3,14}$/
        if (nick.value === '' || nick.value == null) {
          messages.push('Name is required')
        }
        if (!(nameRegExp.test(nick.value))) {
          messages.push('Name should only contain letters and be 3-20 characters long')
        }

        if (!(passRegExp.test(password.value))) {
            messages.push('Contraseña invalida')
        }


        // if (password.value < 7) {
        //     messages.push('Password should have 7-14 characters')
        // }
      
        // if (/^[a-zA-Z0-9- ]*$/.test(password.value) === false) {
        //     messages.push('Password must only contain numbers and letters')
        // }
      
        if (password.value === 'password') {
          messages.push('Password cannot be password')
        }
      
        if (password2.value !== password.value) {
            messages.push('Repeat password was not the same as password')
        }
        console.log(messages, 'mensajes')
        if (messages.length > 0) {
          e.preventDefault()
        //   errorElement.classList.add('validation_errors')
          errorElement.addClass('validation_errors')
          messages.forEach(message =>{
               errorElement.html( errorElement.html() + `<div>${message}</div>` ) 
            //   errorElement.innerHTML = errorElement.innerHTML +`<div>${message}</div>` 
          })
         
          console.log('fail')
        }
      })

      const logName = $('.logName')
      const logPass = $('.logPass')
      const logForm = $('.formLogIn')
      const errorDiv = $('.errorMessagesLog')

      logForm.on('click', (e) => {
          errorDiv.innerHTML = ''
            let messages = []
            const nameRegExp = /[A-Za-z]{3,20}/
            const passRegExp = /^[a-zA-Z]\w{3,14}$/
            if (logName.value === '' || nick.value == null) {
            messages.push('Name is required')
            }
            // if (!(nameRegExp.test(logName.value))) {
            // messages.push('Name should only contain letters and be 3-20 characters long')
            // }

            // if (!(passRegExp.test(logPass.value))) {
            //     messages.push('Contraseña invalida')
            // }

            if(messages.length > 0) {
                e.preventDefault()
                messages.forEach(message, () => {
                    errorDiv.html( errorDiv.html() + `<div>${message}</div>` )
                })
            }
      })



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

    // document.getElementById("coach").innerHTML =  `
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


    // for (let index = 0; index < 3; index++) {
            
    //     let addCoach = coachsData[getRandomInt(coachsData.length)]
    //         if (displayArray.map(function( coach){
    //             coach.id 
    //         })!== addCoach.id) {
    //             console.log(addCoach.id, coach)
    //             displayArray.push(addCoach)
    //         } else {
    //             index--
    //         }
            
            
    //     }
    
    
    

    // document.getElementById("coach").innerHTML =  `
    //     ${displayArray.map(function(coach){
    //     return `
    //     <div class="coachs_card">
    //     <div class="coachs_card_img">
    //         <img src="${coach.img}" alt="">
    //     </div>
    //     <div class="coachs_card_info">
    //         <div class="coachs_card_info_player">
    //         <p> ${coach.name} "${coach.ign}" ${coach.surname}  </p> <img src="${coach.logo}" alt="">
    //         </div>
    //         <div class="coachs_card_info_review"> ${coach.review}</div>
    //         <div class="coachs_card_info_important">
    //         <p>${coach.game}</p> <p>${coach.price}</p>
    //         </div>
    
    //     </div>
    //     </div>
    //     `

    //     }).join('')}
    // `


    
    const burger = document.querySelector('.burger');
    console.log(burger, 'hamburguesa');
    const itemsList = document.querySelector('.items_list');
    console.log(itemsList, 'items navbar');
    const listItem = document.querySelectorAll('.list_item');
    console.log(listItem);
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');
    const dropMob = document.querySelector('.dropdownGamesMobile')
    
    burger.addEventListener('click', () => {
        itemsList.classList.toggle('active');
        // itemsList.classList.toggle('items_list') 
        // listItem.forEach((item,index) => {
        //     item.style.animation =  `leftLinks 2s ease-in-out ${index / 9}s`
        // })
        listItem.forEach((item,index) => {    
            item.classList.toggle('linksAnimation');
            });
        line1.classList.toggle('rotateLine1');
        line2.classList.toggle('displayNone');
        line3.classList.toggle('rotateLine3');
    });

    let intViewportWidth = window.innerWidth;
    console.log( intViewportWidth, 'height')
    if( intViewportWidth < 1025){
        $('.games').on('click', () => {
            console.log('clicked')
            $('.dropdownGamesMobile').slideDown(300);
            $('.navbar_items').toggleClass('active');
            $('.line1').toggleClass('rotateLine1');
            $('.line2').toggleClass('displayNone');
            $('.line3').toggleClass('rotateLine3');
        })
    }

    $('.burger').on('click', () => {
        $('.dropdownGamesMobile').slideUp(300)
    })

    
        let dropMobile = $('.dropdownGamesMobile')
        dropMobile.on('click', function(e){ 
        if ($.contains( e.target, '.dropdownGamesMobile' )){
        console.log("adentro") 
    } else{ 
        $('.dropdownGamesMobile').slideUp(300).removeClass('displayBlock')
        // Clicked outside the box
        console.log("afuera")
        } 
    });
    

    