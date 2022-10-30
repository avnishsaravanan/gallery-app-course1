function activateGallery () {
    
   let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
   let currentImg = document.querySelector("#gallery-photo > img");
   let currentH = document.querySelector("#gallery-info > h3");
   let currentDesc = document.querySelector("#gallery-info > p");
   
   thumbnails.forEach(function(thumbnail) {

    let imgsrc = thumbnail.dataset.largeVersion;

    thumbnail.addEventListener("click", function() {
        currentImg.setAttribute("src", imgsrc);

        newH = thumbnail.dataset.title;
        newDesc = thumbnail.dataset.description;
        currentH.innerHTML = newH;
        currentDesc.innerHTML = newDesc;

        currentImg.setAttribute ("alt", thumbnail.alt);       

        document.querySelector(".current").classList.remove("current");
        thumbnail.parentNode.classList.add("current");       
    })
})};