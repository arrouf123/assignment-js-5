
// SEAT goloke amar use koar jonno array create kora,.

function getRandomSeatnumber(){
    const seatString=['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4' ,'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3' ,'H4', 'I1' ,'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
    

    // get a random seat
    const randomIndex=Math.floor(Math.random()* seatString.length);
    // console.log(index,seat);
    return seatString[randomIndex];

    

}

function hideden(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden');
}

function show(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden');
}

function play(d){
    hideden('banner-section')
    show('f-section')
}