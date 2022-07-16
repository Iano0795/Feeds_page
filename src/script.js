function dark(){
    var Root = document.querySelector(':root');
    Root.style.setProperty('--icon_white', 'black')
    Root.style.setProperty('--icon_black', 'white')
    Root.style.setProperty('--feed_background', 'rgba(18, 18, 18, 0.528)')
    Root.style.setProperty('--input_background_color', 'rgba(28, 27, 27, 0.958)')
    document.getElementById('light').style.width = '24px'
    document.getElementById('light').style.display = 'block'
    document.getElementById('dark').style.display = 'none'
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
function input_focus(){
    document.getElementById('input_field').style.border = 'none'
}
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

// FUNCTION FOR SCROLLING EFFECT ON MAIN SECTION
// function scrolling(){
//     var section_scroll = document.getElementById('main');
//     window.onscroll = function(e){
//         if(window.scrollY){
//             if(window.pageYOffset > 500){
//                 section_scroll.style.height = 100
//             }else{
//                 section_scroll.style.height = 500
//             }
//         }
//     }
// }
