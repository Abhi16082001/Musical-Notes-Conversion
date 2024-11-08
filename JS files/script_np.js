// let soundele=document.querySelector("#soundItem");
// soundele.addEventListener("click",playsound,false);
let context=null;
let wf=["sine","square","sawtooth","triangle"];

  
// function playsound(){
//     if(context==null){
//         context=new AudioContext();

//     }
//     let oscillatornode=context.createOscillator();
//     let gainnode=context.createGain();
//     oscillatornode.type=wf[Math.floor(Math.random()*wf.length)];
//     let frequency=(100 +Math.random()*10000).toFixed(2);
//     // let frequency=fre;
//     oscillatornode.frequency.value=frequency;
//     gainnode.gain.exponentialRampToValueAtTime(0.0000000000000000000000000000000000001, context.currentTime+1);
//     oscillatornode.connect(gainnode);
//     gainnode.connect(context.destination);
//     oscillatornode.start(0);
// } 
function play(fre){
    if(context==null){
        context=new AudioContext();

    }
    let oscillatornode=context.createOscillator();
    let gainnode=context.createGain();
    oscillatornode.type=wf[0];
    let frequency=(fre).toFixed(2);
    oscillatornode.frequency.value=frequency;
    gainnode.gain.exponentialRampToValueAtTime(0.001, context.currentTime+2);
    oscillatornode.connect(gainnode);
    gainnode.connect(context.destination);
    oscillatornode.start(0);
} 
function text(){
    
    let value = document.getElementById("texty").value;
    const word=value.split(' ');
    // alert(word);
for(let i=0;i<word.length;i++){ 
    syncDelay(500);
    if(!(word[i].localeCompare("S-"))){ 
        play(261);
}
    else  if(!(word[i].localeCompare("R-"))){
    play(293);
}
else  if(!(word[i].localeCompare("G-"))){
    play(329);
}
else  if(!(word[i].localeCompare("m-"))){
    play(349);
}
else  if(!(word[i].localeCompare("P-"))){
    play(392);
}
else  if(!(word[i].localeCompare("D-"))){
    play(440);
}
else  if(!(word[i].localeCompare("N-"))){
    play(493);
}
else  if(!(word[i].localeCompare("r-"))){
    play(277);
}
else  if(!(word[i].localeCompare("g-"))){
    play(311);
}
else  if(!(word[i].localeCompare("d-"))){
    play(415);
}
else  if(!(word[i].localeCompare("n-"))){
    play(466);
}
else  if(!(word[i].localeCompare("M-"))){
    play(370);
}

else if(!(word[i].localeCompare("S"))){ 
    play(523);
}
else  if(!(word[i].localeCompare("R"))){
play(587);
}
else  if(!(word[i].localeCompare("G"))){
play(659);
}
else  if(!(word[i].localeCompare("m"))){
play(698);
}
else  if(!(word[i].localeCompare("P"))){
play(784);
}
else  if(!(word[i].localeCompare("D"))){
play(880);
}
else  if(!(word[i].localeCompare("N"))){
play(987);
}
else  if(!(word[i].localeCompare("r"))){
play(554);
}
else  if(!(word[i].localeCompare("g"))){
play(622);
}
else  if(!(word[i].localeCompare("d"))){
play(830);
}
else  if(!(word[i].localeCompare("n"))){
play(932);
}
else  if(!(word[i].localeCompare("M"))){
play(740);
}


else if(!(word[i].localeCompare("S+"))){ 
    play(1046);
}
else  if(!(word[i].localeCompare("R+"))){
play(1174);
}
else  if(!(word[i].localeCompare("G+"))){
play(1318);
}
else  if(!(word[i].localeCompare("m+"))){
play(1396);
}
else  if(!(word[i].localeCompare("P+"))){
play(1568);
}
else  if(!(word[i].localeCompare("D+"))){
play(1760);
}
else  if(!(word[i].localeCompare("N+"))){
play(1975);
}
else  if(!(word[i].localeCompare("r+"))){
play(1108);
}
else  if(!(word[i].localeCompare("g+"))){
play(1244);
}
else  if(!(word[i].localeCompare("d+"))){
play(1661);
}
else  if(!(word[i].localeCompare("n+"))){
play(1864);
}
else  if(!(word[i].localeCompare("M+"))){
play(1480);
}


    else{
    // alert("Invalid note !!");
}
}
    // if(!(value.localeCompare("string"))){
    //     play(8000);  
    //     alert(value); 
    // }
    // else{
    // //    for(let i=0;i<10;i++)
    //  play(1000);

//  alert(value);

// play(1000)  ,play(2000),play(3000),play(4000)
// play(5000)
// alert(`NO ${value}`);
// }
}
function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }

   function SelectRedirect(){
    let sel=document.getElementById("s1").value;
    switch(sel)
    {
    case "Pianotoflute":  
    window.location="Piano_to_flute.html";
    break;
    
    case "interconversion":  
       
    window.location="interfluteconv.html";
    break;
    
    case "notesplayer":  
    window.location="NotesPlayer.html";
    break;
    case "virtualpiano":  
    window.location="Virtual_piano.html";
    break;
    
    case "Homepage":  
    window.location="../index.html";
    break;
    default:
        
    window.location="../index.html"; 
    break;
    }}