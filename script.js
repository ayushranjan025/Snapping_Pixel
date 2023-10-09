const searchBox = document.querySelector('#input');
const searchBtn = document.querySelector('.search-btn');
const searchResult = document.querySelector('.search-result')
const showMore = document.querySelector('.show-more');
const searchForm = document.querySelector('.searchform')
const natureBtn = document.querySelector('#nature');
const birdsBtn = document.querySelector('#birds');
const wildlifeBtn = document.querySelector('#wildlife');
const bikesBtn = document.querySelector('#bikes');
const carBtn = document.querySelector('#cars');

let accessKey ="km4IlMMLnJjTwP49X2jogskx-l4t86rpRY2kJrYF2ak";
let page = 1;


let key = function(){
    return searchBox.value;
}

let pageCheck = function(){
    if(page===1){
        searchResult.innerHTML ="";
    }
}

let navBtn = function (){
    if(searchResult.classList.contains("clicked")){
        searchResult.innerHTML ="";
    }
}


async function searchImages(key){
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=${accessKey}&per_page=12`;

    const res = await fetch(url);
    const data = await res.json();

    pageCheck();

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target ="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    showMore.style.display ="block";
}


//search BUTTON FUNCTIONALITY
searchBtn.addEventListener('click',async(e)=>{
    page =1;
    searchImages(key());
});



//SHOW MORE BUTTON FUNCTIONALITY
showMore.addEventListener("click",async (e)=>{
    page++;
    if(searchBox.value !== ""){

        searchImages(key());
    }else if(natureBtn.classList.contains("nature")){
        
        searchImages("nature");
    }else if(birdsBtn.classList.contains("birds")){
        
        searchImages("birds");
    }else if(wildlifeBtn.classList.contains("wildlife")){
        
        searchImages("wildlife");
    }else if(bikesBtn.classList.contains("bikes")){
        
        searchImages("bikes");
    }else if(carBtn.classList.contains("cars")){
       
        searchImages("cars");
    }
});





//nav bar buttons
natureBtn.addEventListener("click",async()=>{
    searchResult.classList.add("clicked");
    navBtn();

    birdsBtn.classList.remove("birds");
    wildlifeBtn.classList.remove("wildlife");
    bikesBtn.classList.remove("bikes");
    carBtn.classList.remove("cars");


    natureBtn.classList.add("nature");
    searchImages("nature");
});

birdsBtn.addEventListener("click",async()=>{
    searchResult.classList.add("clicked");
    navBtn();
    
    natureBtn.classList.remove("nature");
    wildlifeBtn.classList.remove("wildlife");
    bikesBtn.classList.remove("bikes");
    carBtn.classList.remove("cars");


    birdsBtn.classList.add("birds");
    searchImages("birds");
});

wildlifeBtn.addEventListener("click",async()=>{
    searchResult.classList.add("clicked");
    navBtn();

    birdsBtn.classList.remove("birds");
    natureBtn.classList.remove("nature");
    bikesBtn.classList.remove("bikes");
    carBtn.classList.remove("cars");


    wildlifeBtn.classList.add("wildlife");
    searchImages("wildlife");
});

bikesBtn.addEventListener("click",async()=>{
    searchResult.classList.add("clicked");
    navBtn();
    
    birdsBtn.classList.remove("birds");
    wildlifeBtn.classList.remove("wildlife");
    natureBtn.classList.remove("nature");
    carBtn.classList.remove("cars");


    bikesBtn.classList.add("bikes");
    searchImages("bikes");
});

carBtn.addEventListener("click",async()=>{
    searchResult.classList.add("clicked");
    navBtn();
    
    birdsBtn.classList.remove("birds");
    wildlifeBtn.classList.remove("wildlife");
    bikesBtn.classList.remove("bikes");
    natureBtn.classList.remove("nature");


    carBtn.classList.add("cars");
    searchImages("cars");
});