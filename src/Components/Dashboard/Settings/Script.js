
const profile = document.querySelector("#profile");
var uploaded_image = "";

console.log(profile)

// profile.addEventListener("change", function(){
//     const reader = new FileReader();
//     reader.addEventListener("load", () =>{
//         uploaded_image = reader.result;
//         document.querySelector("#upload").style.backgroundImage = `url(${uploaded_image})`;
//     });
//     reader.readAsDataURL(this.files[0]);
// })