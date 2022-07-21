/* loading screen */
$(document).ready(function () {
    $(".loading-screen").fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
  });
  // 


/* search */
let search = document.getElementById("search");
$("#search").keyup(function () {
  getMoviesBySearch();
});

async function getMoviesBySearch() {
  movieName = search.value;
  let myResponse = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6561cb2930d16b56c3b86696d0405426&query=${movieName}`
  );
  let movie = await myResponse.json();
  movieApi = movie.results;
  display();
}

// api function getData
    let movieApi=[];
async function getData(movie){
    let myResponse=await fetch(`https://api.themoviedb.org/3/${movie}?api_key=7546991bb005f372f33fbdd86b806857&language=en-US&page=1`);
    
    movieApi= await myResponse.json();
    movieApi=movieApi.results;    
    display();
    }
    
getData('movie/now_playing');

// get kind of movie
let row=document.querySelector('.row');
var links = document.querySelectorAll(".nav-link");
for (var i = 0; i < links.length - 1; i++) {
  links[i].addEventListener("click", function (e) {
    var kindOfMovies = (e.target.id);
    getData(kindOfMovies);
  });
}

//display function


function display(){
    
    let divs ='';
    for(let i=0 ; i<movieApi.length;i++){
        divs+=`
        <div class="col-md-6 col-lg-4 my-3 px-3">
            <div class="movie position-relative overflow-hidden">
                <img src="https://image.tmdb.org/t/p/w500${movieApi[i].poster_path}" class="img-fluid">
                <div class="layer p-3 text-center d-flex justify-content-center align-items-center flex-column ">
                    <h2 class="my-2">${movieApi[i].title}</h2>
                    <p class="my-2">${movieApi[i].overview}</p>
                    <p>${movieApi[i].vote_average}</p>
                    <p>${movieApi[i].release_date}</p>
                </div>
            </div>
        </div>
        `;
    row.innerHTML=divs;
}
}





// regular expression

    function regexTrue(input,alert){
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        alert.classList.add('d-none')
    }

    function regexFalse(input,alert){
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        alert.classList.remove('d-none')
    }


//regular expression for  name 

let nameInput=document.getElementById('name-input');
let nameAlert=document.getElementById('name-alert');
let submitBtn=document.getElementById('submitBtn');
nameInput.onblur=function(){
    let regexName = /^[a-z]{2,10}$/;
    if(regexName.test(nameInput.value)==true){
        regexTrue(nameInput,nameAlert);
        return true;
    }
    else{
        regexFalse(nameInput,nameAlert);
        return false
    }
 

};

//regular expression for Email
let emailInput=document.getElementById('email-input');
let emailAlert=document.getElementById('email-alert');

emailInput.onblur=function(){
let regexEmail =/^[a-z]{2,10}.{1}(gmail|yahoo|hotmail|outlook).{1}com$/;
    if(regexEmail.test(emailInput.value)==true){
        regexTrue(emailInput,emailAlert);
        return true;
    }
    else{
        regexFalse(emailInput,emailAlert);
        return false
    }
}

//regular expression for phone
let phoneInput=document.getElementById('phone-input');
let phoneAlert=document.getElementById('phone-alert');

phoneInput.onblur=function(){
    let regexPhone = /^01[0125][0-9]{8}$/;
    if(regexPhone.test(phoneInput.value)==true){
        regexTrue(phoneInput,phoneAlert);
        return true;
    }
    else{
        regexFalse(phoneInput,phoneAlert);
        return false
    }
    
}

//regular expression for age
let ageInput=document.getElementById('age-input');
let ageAlert=document.getElementById('age-alert');
ageInput.onblur=function(){
    let regexAge =/^[1-9]{2}$/
    if(regexAge.test(ageInput.value)==true){
        regexTrue(ageInput,ageAlert);
        return true;
    }
    else{
        regexFalse(ageInput,ageAlert);
        return false;
    }
    
}

//regular expression for password
let passwordInput=document.getElementById('password-input');
let passwordAlert=document.getElementById('password-alert');
    passwordInput.onblur=function(){
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(regexPassword.test(passwordInput.value)==true){
            regexTrue(passwordInput,passwordAlert);
            return true;
        }
        else{
            regexFalse(passwordInput,passwordAlert);
            return false;
        }
    
}


//regular expression for rePassword
let rePasswordInput=document.getElementById('rePassword-input');
let rePasswordAlert=document.getElementById('rePassword-alert');
rePasswordInput.onblur=function(){
        if(passwordInput.value==rePasswordInput.value){
            regexTrue(rePasswordInput,rePasswordAlert);
        }
        else{
            regexFalse(rePasswordInput,rePasswordAlert);
        }
    
}


// // submitBtn.disabled = "true";

// if{
//     submitBtn.removeAttribute("disabled");

// }




let slidBarWidth = $(".links-box").innerWidth();
$(document).ready(function () {
  $("#optionBox").animate({ left: `-${slidBarWidth}` }, 0);
});
/********************************/
$("#toggleBtn").click(function () {
  let slidBarWidth = $(".links-box").innerWidth();
  if ($("#optionBox").css("left") == "0px") {
    $("#navbarSupportedContent").slideUp(1000, function () {
      $("#optionBox").animate({ left: `-${slidBarWidth}` }, 1000);
      $("#toggleBtn").removeClass("fa-times");
      $("#toggleBtn").addClass("fa-bars");
    });
  } else {
    $("#optionBox").animate({ left: "0px" }, 1000, function () {
      $("#navbarSupportedContent").slideDown(1000);
      $("#toggleBtn").addClass("fa-times");
    });
  }
});








// ///////////////////////////////////////
/* search function */
