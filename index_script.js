$(document).ready(function(){
    $("#contact_support_bar").toggle(view_Support, hide_Support);
    
    function view_Support(){
    	$(".nav_support").css({"display":"block"});
    }
    function hide_Support(){
    	$(".nav_support").css({"display":"none"});
    }
	
    $(".hamburger_floating_item").toggle(view_Menu, hide_Menu);	
    function view_Menu(){
    	$(":root").css({"overflow-y":"hidden"});
    	$(".mobile_menu_section").css({"transform" : "translateX(0%)"});
    }
    
    
    
    function hide_Menu(){
    	$(":root").css({"overflow-y":"visible"});
    	$(".mobile_menu_section").css({"transform" : "translateX(-100%)"});
    }
    $("#menu_bar").toggle(view_Mobile_Menu, hide_Mobile_Menu);
    function view_Mobile_Menu(){
    	$(":root").css({"overflow-y":"hidden"});
    	$(".menu_section").css({"transform" : "translateY(10%)"});
    	
    }
    
    
    
    function hide_Mobile_Menu(){
    	$(":root").css({"overflow-y":"visible"});
    	$(".menu_section").css({"transform" : "translateY(-100%)"});
    }	

});




const get_Slide_Item_One = document.querySelector(".slide_item_one");


function slide_Item_One_Animation(entries, observer){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("slide_item_one_animation_class");
			observer.unobserve(entry.target);
			
		}
	});
}


const slide_Item_One_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
    threshold : 0.6,
}




const slide_Item_One_Animation_API = new IntersectionObserver(slide_Item_One_Animation, slide_Item_One_Animation_Root);

slide_Item_One_Animation_API.observe(get_Slide_Item_One);




const  get_Left_Slide_Text_Animation = document.querySelectorAll(".intro, .carousel-inner");

function left_Slide_Text_Animation(entries, observer){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			
			entry.target.classList.add("left_slide_text_animation_class");
			observer.unobserve(entry.target);
			
		}
	});
	
	
}

const left_Slide_Text_Animation_Root =
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
}

const left_Slide_Text_Animation_API = new IntersectionObserver(left_Slide_Text_Animation, left_Slide_Text_Animation_Root);

get_Left_Slide_Text_Animation.forEach( (target) => {left_Slide_Text_Animation_API.observe(target)});




const get_Headline = document.querySelectorAll(".salon_heading, .ninth_section_heading");


function headline_Animation(entries, observer){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("headline_animation_class");
			observer.unobserve(entry.target);
		}
	});
	
}

const headline_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
}


const headline_Animation_API = new IntersectionObserver(headline_Animation, headline_Animation_Root);


get_Headline.forEach( (target) => {headline_Animation_API.observe(target)});
