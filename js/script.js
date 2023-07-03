

let search_input = document.getElementById("search_input")
let search_form = document.getElementById("search_form")
let recent_searchEl=document.querySelector(".recent_search")

let recentSearch=["mobile","clothes"];
search_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    recentSearch.unshift(search_input.value)
    renderRecentSearch()
})


function renderRecentSearch(){
    let recent_search_html =''
    recentSearch.forEach(el =>{
        recent_search_html +=`
        <div class="recent_search_list font">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
        </div>    
        `
    })
    recent_searchEl.innerHTML= recent_search_html
}
renderRecentSearch();

let prev_imgBtn = document.getElementById("prev_imgBtn")
let next_imgBtn = document.getElementById("next_imgBtn")

let start = 0;
let end = -400;
prev_imgBtn.addEventListener("click", handleprevImg)
next_imgBtn.addEventListener("click", handlenextImg)

function handleprevImg(){
    let imgList = document.querySelectorAll(".imgSliderItem")
   // console.log(imgList)
    if(start<0)
    start+=100
    imgList.forEach(el=>{
        el.style.transform = `translateX(${start}%)`
    })
}
function handlenextImg(){
    let imgList = document.querySelectorAll(".imgSliderItem")
    //console.log(imgList)
    if(start>end)
    start-=100
    imgList.forEach(el=>{
        el.style.transform = `translateX(${start}%)`
    })

}
function renderImgSlider(){
    if(start > end){
        handlenextImg()
    }
    else{
        start = 100
    }
}
setInterval(renderImgSlider,4000)

let cardItemContainer = document.getElementById("card_items_container")
let cardBtnRight = document.getElementById("card-btn-right")

cardBtnRight.addEventListener("click" , function(){
    cardItemContainer.style.transform = "translateX(-90%)"
})
