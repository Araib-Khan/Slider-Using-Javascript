var slideindex = 1;  
display(slideindex);  
function nextbutton(a) {
    display(slideindex += a); 
}
function current(a) {  
    display(slideindex = a);  
}  
function display(a){
var slider = document.getElementsByClassName("imageslider");
if(a> slider.length){
    slideindex = 1;
}
if(a<1){
    slideindex = slider.length
}
for (var i = 0; i < slider.length; i++) {  
    slider[i].style.display = "none";  
} 
slider[slideindex - 1].style.display = "block";
}