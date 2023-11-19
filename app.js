
const dom =  {
    progress: document.querySelector(".progress"),
    prev: document.getElementById("prev"),
    next: document.getElementById("next"),
    circle: document.querySelectorAll(".circle"),
};
// console.log(dom.circle.length);
// console.log(dom.progress);
// console.log(dom.next);
// console.log(dom.prev);

let currentActive = 0;

dom.next.addEventListener('click', (e) => {
    currentActive++;
    dom.circle[currentActive].classList.add('active')
    console.log(currentActive);
    if (currentActive > 0) {
        dom.prev.removeAttribute("disabled","")
    }
    if (currentActive == dom.circle.length - 1) {
        e.currentTarget.setAttribute("disabled","");
    } 
    progressBar();
})

dom.prev.addEventListener('click', (e) => {
    currentActive--;
    dom.circle[currentActive + 1].classList.remove('active')
    console.log(currentActive);
    if (currentActive < dom.circle.length) {
        dom.next.removeAttribute("disabled","");
    }
    if (currentActive == 0) {
        e.currentTarget.setAttribute("disabled","");
    } 
    progressBar();
})

function progressBar() {
    let allLength = dom.circle.length;
    let percentage = (currentActive / (allLength-1)) * 100;
    dom.progress.style.width = `${percentage}%`;
    console.log(percentage);

}





//應該把檢查currentActive 是否 增加 active 功能額外寫
/* 
function update() {
    dom.circle.forEach((circle, idx)=>{
        if (idx < currentActive){
            circle.classList.add('active');
        } else {
            dom.circle.classList.remove('active');
        }
    })
    
} 
*/