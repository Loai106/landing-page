/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//global variables 
const sections = document.querySelectorAll('section');
const navigationBar = document.querySelector('#navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
function navBuilder(){
    let navItems='';
    
    //for loop to add all li elements in the menu accourding to the number of sections
    for(let i=0; i<sections.length;++i)
    {   
        const sectionName = sections[i].dataset.nav;
        navItems+=`<li ><a class="menu__link"  href="#section${i+1}" data-section-id="section${i+1}"  >${sectionName}</a></li>`;
    }

    //appinding the navigation bar to the DOM
    navigationBar.innerHTML=navItems;
}
//calling the function to implement it
navBuilder();




//selection the active section
function isActive(section)
{
    const box = section.getBoundingClientRect();
        if(box.top <=150 && box.bottom >= 150)
    { 
        return true;
    }
    else 
    {
        return false;

    }
}



//function for removing  the active class
function removeActiveClass(section){

    //getting the element that have the active class then reomve it so we can add the active class to the one on viewPort
    section.classList.remove('your-active-class');

}

//adding the active class to the active section
function addClass(condition,section)
{   
    if(condition)
    {
    section.classList.add('your-active-class');
    }
    else
    {
        removeActiveClass(section);
    }
}



//function for applying the previous functions when scrolling the screen
function activateSection(sections)
{   

    for(const section of sections)
    {
        const active = isActive(section);
        addClass(active,section);
    }


}

//make the activateSection function called when scrolling 
document.addEventListener('scroll',function(){
    activateSection(sections);
});



//remove clicked class from all the links
function removeClickedClass()
{
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.classList.remove('clicked');
        
    });
}

//add clicked class for the clicked link
function addClickedClass(link)
{

    link.classList.add('clicked');
}





// Scroll to anchor ID using scrollTO event


//getting the navigation bar to make an event when click on it

navigationBar.addEventListener('click',function(eve){
    event.preventDefault();

    //restore the linked was clicked
    const link = eve.target;
    //delete the "clicked" class from all the links
    removeClickedClass();
    //add the "clicked" class for the targeted link
    addClickedClass(link);


    //getting the element we want scroll into
    const targetedSection = document.getElementById(`${eve.target.dataset.sectionId}`);
    targetedSection.scrollIntoView({behavior: 'smooth'});


});





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


