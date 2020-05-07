const proj_div = document.getElementById("proj_button");
const abilities_div = document.getElementById("abilities_button");
const me_div = document.getElementById("me_button");
const contact_div = document.getElementById("contact_button");
const top_button = document.getElementById("top_button");

function go_to(which_button){ 
        $('html,body').animate({
            scrollTop: $("#"+which_button+"_section").offset().top},
            'slow');
}

function main(){

    proj_div.addEventListener('click', function(){
        go_to("proj");
    })

    abilities_div.addEventListener('click', function(){
        go_to("abilities");
    })
    me_div.addEventListener('click', function(){
        go_to("me");
    })
    contact_div.addEventListener('click', function(){
        go_to("contact");
    })





// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top_button.style.display = "block";
    } else {
        top_button.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
top_button.addEventListener('click', function(){
    $('html,body').animate({
        scrollTop: 0},
        'slow');
    })

}


main();