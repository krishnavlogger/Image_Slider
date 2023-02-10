const sildes=document.querySelectorAll(".silde");
console.log(sildes);
var counter=0;
sildes.forEach(
    (silde,index)=>{
        silde.style.left=`${index*100}%`;
    }
)
const goPrev = () => {
    counter--;
    
    slideimage();
}
const goNext = () =>{ 
    counter++;
    
    slideimage();
}
const slideimage=()=>{
    sildes.forEach(
        (silde)=>{
            silde.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}