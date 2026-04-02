:::writing{variant=“standard” id=“code3”}
function openModal(type) {
const modal = document.getElementById(“modal”);
const content = document.getElementById(“modalContent”);

modal.style.display = “block”;

if(type === “cnc”){
content.innerHTML = <h2>CNC + Fusion 360</h2> <video src="assets/videos/cnc.mp4" controls></video> <video src="assets/videos/fusion360.mp4" controls></video>;
}

if(type === “printing”){
content.innerHTML = <h2>3D Printing & Robotics</h2> <img src="assets/images/robot-arm.jpg"> <video src="assets/videos/printing.mp4" controls></video>;
}

if(type === “hammer”){
content.innerHTML = <h2>Hammer Project</h2> <img src="assets/images/hammer-body-1.jpg"> <img src="assets/images/hammer-head-1.jpg">;
}
}

function closeModal(){
document.getElementById(“modal”).style.display = “none”;
}

// LANG SWITCH
let isEnglish = true;

document.getElementById(“langToggle”).onclick = () => {
isEnglish = !isEnglish;

document.querySelectorAll(”[data-en]”).forEach(el=>{
el.innerText = isEnglish ? el.dataset.en : el.dataset.fr;
});
};
:::
