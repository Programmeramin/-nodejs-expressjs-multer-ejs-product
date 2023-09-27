const userphoto = document.querySelector(".userphoto");
const userphotopreview = document.querySelector("#userphotopreview");


userphoto.onchange = (e) =>{
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    userphotopreview.setAttribute('src', imageUrl)
}

