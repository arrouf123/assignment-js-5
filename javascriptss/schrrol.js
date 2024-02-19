// function play(){
// //    step 1 hide the banner section.to add the hidden class to the banner sction
// const bannnerSection=document.getElementById('banner-screen');
// bannnerSection.classList.add('hidden');
// // console.log(bannnerSection.classList);
// // step 2 show the main section
// const mainSectin=document.getElementById('main-play');
// mainSectin.classList.remove('hidden');
// }

function continueGame(){
    const seat=getRandomSeatnumber();
    console.log('your random alphabet',seat);

}


function play(elementId){
    hiddenElementById('banner-screen');
    shoewElementById('main-play');
    continueGame();
}