
function toggleAccountMenuBtnStyle(){
    accountMenuToggleBtn.classList.toggle("border-gray-300");
    accountMenuToggleBtn.classList.toggle("border-gray-600");
    accountMenuToggleBtn.classList.toggle("xl:border-gray-300");
    accountMenuToggleBtn.classList.toggle("xl:border-gray-600");
}

function setVisibility(el, visible){
    if(visible){
        el.setAttribute("visibility", "visible")
    }
    else{
        el.setAttribute("visibility", "hidden")
    }
}


// toggle main nav

const navToggleBtn = document.querySelector("#nav-toggle-btn");

navToggleBtn.addEventListener('click', ()=>{
    const nav = document.querySelector("#nav");
    const navOpenIcon = document.querySelector("#nav-open-icon");
    const navCloseIcon = document.querySelector("#nav-close-icon");

    const hidden = nav.classList.toggle("hidden");
    setVisibility(navOpenIcon, hidden);
    setVisibility(navCloseIcon, !hidden);
})



// toggle filters 

const filtersToggleBtn = document.querySelector("#filters-toggle-btn");

filtersToggleBtn.addEventListener('click', ()=>{        
    const filters = document.querySelector("#filters");
    
    filters.classList.toggle("hidden");
    filtersToggleBtn.classList.toggle("bg-gray-700");
    filtersToggleBtn.classList.toggle("bg-gray-600");
})



// toggle account menu

const accountMenuToggleBtn = document.querySelector("#account-menu-toggle-btn");

accountMenuToggleBtn.addEventListener('click', ()=>{        
    const accountMenu = document.querySelector("#account-menu");

    accountMenu.classList.toggle("hidden");  
    clickAway.classList.toggle("sm:block");  
    toggleAccountMenuBtnStyle();

    console.log("botton")
})



// auto close account menu dropdown - escape button

const onEscape = (e) => {
    const accountMenu = document.querySelector("#account-menu");

    if(accountMenu.classList.contains("hidden") || e.key != 'Escape'){
        return;
    }

    accountMenu.classList.toggle("hidden");
    clickAway.classList.toggle("sm:block");  
    toggleAccountMenuBtnStyle();

    console.log("escape")

};
document.addEventListener('keydown', onEscape)



// // auto close account menu dropdown - screen click

// document.addEventListener('click', e => {
    
//     if(accountMenu.classList.contains("hidden") || accountMenuToggleBtn.contains(e.target) || accountMenu.contains(e.target)){
//        return; 
//     }

//     accountMenu.classList.toggle("hidden");
//     clickAway.classList.toggle("sm:block");  
//     toggleAccountMenuBtnStyle();
// });


 
// auto close account menu dropdown - screen click
const clickAway = document.querySelector("#click-away");

clickAway.addEventListener('click', e => {
    console.log("click away")
   
    const accountMenu = document.querySelector("#account-menu");
    if(accountMenu.classList.contains("hidden") || accountMenu.contains(e.target)){
       return; 
    }

    accountMenu.classList.toggle("hidden");
    clickAway.classList.toggle("sm:block");  
    toggleAccountMenuBtnStyle();
});


