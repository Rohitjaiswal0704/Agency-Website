let page1_nav_button=document.querySelector("#page1>nav>button");

page1_nav_button.addEventListener("mouseenter",function(){
    page1_nav_button.style.background="#3D3D3D";
})

page1_nav_button.addEventListener("mouseleave",function(){
    page1_nav_button.style.background="";
})


// ----
let page1_content_left_paragraph_image_box=document.querySelector("#page1_content_left_paragraph_image_box");
let image_under_cercle=document.querySelector("#image_under_cercle");

page1_content_left_paragraph_image_box.addEventListener("mouseenter",function(){
    image_under_cercle.style.scale="1.4";
    image_under_cercle.style.transition="0.3s"
});

page1_content_left_paragraph_image_box.addEventListener("mouseleave",function(){
    image_under_cercle.style.scale="1";
    image_under_cercle.style.transition="0.3s"
});



// ------------

// -------------------------menubar----------------------------
let menuline=document.querySelector("#menuline");
let menubar=document.querySelector("#menubar");
let crossmenu=document.querySelector("#crossmenu");

menuline.addEventListener("click",function(){
    menubar.style.transform="translateY(-0%)"
    menubar.style.transition="1"
})

crossmenu.addEventListener("click",function(){
    menubar.style.transform="translateY(-300%)"
    menubar.style.transition="0.5"
})
