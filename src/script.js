function dark(){
    var Root = document.querySelector(':root');
    Root.style.setProperty('--icon_white', 'black')
    Root.style.setProperty('--icon_black', 'white')
    Root.style.setProperty('--feed_background', 'rgba(18, 18, 18, 0.528)')
    Root.style.setProperty('--input_background_color', 'rgba(28, 27, 27, 0.958)')
    document.getElementById('light').style.width = '24px'
    document.getElementById('light').style.display = 'block'
    document.getElementById('dark').style.display = 'none'
    document.getElementById('body').style.backgroundImage = "linear-gradient(to top, rgba(255, 255, 255, 0.672), rgba(255, 255, 255, 0.672)) url('/resources/images/tours/pexels-luis-del-río-15286.jpg')"
    // document.getElementById('search_icon').style.margin = '10px'
}
function light(){
    var Root1 = document.querySelector(':root');
    Root1.style.setProperty('--icon_white', 'white')
    Root1.style.setProperty('--icon_black', 'black')
    Root1.style.setProperty('--feed_background', 'rgba(255, 255, 255, 0.648)')
    Root1.style.setProperty('--input_background_color', 'white')
    document.getElementById('dark').style.width='24px'
    document.getElementById('dark').style.display = 'block'
    document.getElementById('light').style.width = '0px'
}
function show(){
    document.getElementById('links').style.visibility = 'visible'
    document.getElementById('quick_links').style.bottom = '50%'
    document.getElementById('more').style.transform = 'rotate(180deg)'
    document.getElementById('link').style.visibility = 'hidden'
}
function less(){
    document.getElementById('links').style.visibility = 'collapse'
    document.getElementById('quick_links').style.bottom = '30%'
    document.getElementById('more').style.transform = 'rotate(0deg)'
    document.getElementById('link').style.visibility = 'visible'
}
function show_apps(){
    document.getElementById('apps_container').style.visibility = 'visible'
}
function less_apps(){
    document.getElementById('apps_container').style.visibility = 'hidden'
}
function expand_list(){
    document.getElementById('list_container').style.visibility = 'visible'
}
function reduce_list(){
    document.getElementById('list_container').style.visibility = 'hidden'
}

// CHANGING VALUES AND CALLING FUNCTIONS
var changing_color = true
document.getElementById('dark_mode').addEventListener("click", switching_mode)
function switching_mode(){
    if(changing_color==true){
        dark()
        changing_color = false
    }else{
        light()
        changing_color = true
    }
}

document.getElementById('link_container').addEventListener("click", expanding)

function expanding(){
    if(changing_color==true){
        show()
        changing_color = false
    }else{
        less()
        changing_color = true
    }
}

document.getElementById('apps').addEventListener("click", apps_visibility)

function apps_visibility(){
    if(changing_color==true){
       
        show_apps()
        changing_color = false
    }else{
        less_apps()
        changing_color = true
    }
}

document.getElementById('menu').addEventListener("click", show_list)

function show_list(){
    if(changing_color==true){
        expand_list()
        changing_color = false
    }else{
        reduce_list()
        changing_color = true
    }
}
// var images = ["/resources/images/tours/pexels-brent-olson-5219233.jpg",
//                 "/resources/images/tours/pexels-jaime-reimer-2662116.jpg",
//                 "/resources/images/tours/pexels-luis-del-río-15286.jpg",
//                 "/resources/images/tours/pexels-lumn-167699.jpg"
// ]
// var imageHead = document.getElementById('body')

// var i = 0 
//  setInterval(function(){
//     imageHead.style.background = "url(" + images[i] + ")"
//     i = i + 1
//     if(i == images.length){
//         i = 0
//     }
//  }, 100)

// const background_images = ["/resources/images/tours/pexels-brent-olson-5219233.jpg",
//                 "/resources/images/tours/pexels-jaime-reimer-2662116.jpg",
//                 "/resources/images/tours/pexels-luis-del-río-15286.jpg",
//                 "/resources/images/tours/pexels-lumn-167699.jpg"]
// const node = document.getElementById('body');
// const cycleImages = (images, container, step) =>  {
//     images.forEach((image, index) => (
//         setTimeout(() =>{
//             container.style.backgroundImage = 'url(${image})'
//         }, step * (index + 1))
//     ));
//     setTimeout(() => cycleImages(images, container, step), step * images.length)
// }

// cycleImages(background_images, node, 1000)








//  JQUERY SCRIPTS GO HERE
$(document).ready(
    function(){
        $("#apps").click(
            function(){
                $("#apps_container").show();
            }
        );
    }
);
//  TRYING TO LOAD IMAGE USING JQUERY AFTER LOADING THE ENTIRE WEBPAGE
$(window).load(function(){
    var img = $("").attr('src', "/resources/images/shopping/pexels-muhammadtaha-ibrahim-ma'aji-5115728.jpg").load(function(){
        $("#twelveth_feed").append(img);
    })
})
