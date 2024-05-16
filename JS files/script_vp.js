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
    window.location="Homepage.html";
    break;
    default:
        
    window.location="Homepage.html"; 
    break;
    }}

//     var input = document.onkeydown;
//     alert(input);
//     alert(event.key);
//     input.addEventListener("keypress",btnplay()) 
//     function btnplay(input){
//     if(input=="A"){
//         alert(input); document.getElementsByClassName("S-").click();
// }
//     }

let context=null;
let wf=["sine","square","sawtooth","triangle"];
function play(fre){
    currentTime=0;
    if(context==null){
        context=new AudioContext();
        
    }
    let oscillatornode=context.createOscillator();
    let gainnode=context.createGain();
    oscillatornode.type=wf[0];
    let frequency=(fre).toFixed(2);
    oscillatornode.frequency.value=frequency;
    gainnode.gain.exponentialRampToValueAtTime(0.000001, context.currentTime+1);
    oscillatornode.connect(gainnode);
    gainnode.connect(context.destination);
    oscillatornode.start(0);
} 
const playkey_r0=()=>{
    document.getElementById("r-").click();
    document.getElementById("r-").style.background='#333d47';
    setTimeout(()=>{document.getElementById("r-").style.background='#000000';},180);
};
const playkey_g0=()=>{
    document.getElementById("g-").click();
    document.getElementById("g-").style.background='#333d47';
    setTimeout(()=>{document.getElementById("g-").style.background='#000000';},180);
};
const playkey_d0=()=>{
    document.getElementById("d-").click();
    document.getElementById("d-").style.background='#333d47';
    setTimeout(()=>{document.getElementById("d-").style.background='#000000';},180);
};
const playkey_n0=()=>{
    document.getElementById("n-").click();
    document.getElementById("n-").style.background='#333d47';
    setTimeout(()=>{document.getElementById("n-").style.background='#000000';},180);
};
const playkey_M0=()=>{
    document.getElementById("M-").click();
    document.getElementById("M-").style.background='#333d47';
    setTimeout(()=>{document.getElementById("M-").style.background='#000000';},180);
};
const playkey_r=()=>{
    document.getElementById("r").click();
    document.getElementById("r").style.background='#333d47';
    setTimeout(()=>{document.getElementById("r").style.background='#000000';},180);
};
const playkey_g=()=>{
    document.getElementById("g").click();
    document.getElementById("g").style.background='#333d47';
    setTimeout(()=>{document.getElementById("g").style.background='#000000';},180);
};
const playkey_d=()=>{
    document.getElementById("d").click();
    document.getElementById("d").style.background='#333d47';
    setTimeout(()=>{document.getElementById("d").style.background='#000000';},180);
};
const playkey_n=()=>{
    document.getElementById("n").click();
    document.getElementById("n").style.background='#333d47';
    setTimeout(()=>{document.getElementById("n").style.background='#000000';},180);
};
const playkey_M=()=>{
    document.getElementById("M").click();
    document.getElementById("M").style.background='#333d47';
    setTimeout(()=>{document.getElementById("M").style.background='#000000';},180);
};
const playkey_r1=()=>{
    document.getElementById("r1").click();
    document.getElementById("r1").style.background='#333d47';
    setTimeout(()=>{document.getElementById("r1").style.background='#000000';},180);
};
const playkey_g1=()=>{
    document.getElementById("g1").click();
    document.getElementById("g1").style.background='#333d47';
    setTimeout(()=>{document.getElementById("g1").style.background='#000000';},180);
};
const playkey_d1=()=>{
    document.getElementById("d1").click();
    document.getElementById("d1").style.background='#333d47';
    setTimeout(()=>{document.getElementById("d1").style.background='#000000';},180);
};
const playkey_n1=()=>{
    document.getElementById("n1").click();
    document.getElementById("n1").style.background='#333d47';
    setTimeout(()=>{document.getElementById("n1").style.background='#000000';},180);
};
const playkey_M1=()=>{
    document.getElementById("M1").click();
    document.getElementById("M1").style.background='#333d47';
    setTimeout(()=>{document.getElementById("M1").style.background='#000000';},180);
};

const playkey_S0=()=>{
    document.getElementById("S-").click();
    document.getElementById("S-").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("S-").style.background='#0000002d';},180);
};
const playkey_R0=()=>{
    document.getElementById("R-").click();
    document.getElementById("R-").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("R-").style.background='#0000002d';},180);
};
const playkey_G0=()=>{
    document.getElementById("G-").click();
    document.getElementById("G-").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("G-").style.background='#0000002d';},180);
};
const playkey_m0=()=>{
    document.getElementById("m-").click();
    document.getElementById("m-").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("m-").style.background='#0000002d';},180);
};
const playkey_P0=()=>{
    document.getElementById("P-").click();
    document.getElementById("P-").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("P-").style.background='#0000002d';},180);
};
const playkey_D0=()=>{
    document.getElementById("D-").click();
    document.getElementById("D-").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("D-").style.background='#0000002d';},180);
};
const playkey_N0=()=>{
    document.getElementById("N-").click();
    document.getElementById("N-").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("N-").style.background='#0000002d';},180);
};

const playkey_S=()=>{
    document.getElementById("S").click();
    document.getElementById("S").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("S").style.background='#0000002d';},180);
};
const playkey_R=()=>{
    document.getElementById("R").click();
    document.getElementById("R").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("R").style.background='#0000002d';},180);
};
const playkey_G=()=>{
    document.getElementById("G").click();
    document.getElementById("G").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("G").style.background='#0000002d';},180);
};
const playkey_m=()=>{
    document.getElementById("m").click();
    document.getElementById("m").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("m").style.background='#0000002d';},180);
};
const playkey_P=()=>{
    document.getElementById("P").click();
    document.getElementById("P").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("P").style.background='#0000002d';},180);
};
const playkey_D=()=>{
    document.getElementById("D").click();
    document.getElementById("D").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("D").style.background='#0000002d';},180);
};
const playkey_N=()=>{
    document.getElementById("N").click();
    document.getElementById("N").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("N").style.background='#0000002d';},180);
};


const playkey_S1=()=>{
    document.getElementById("S1").click();
    document.getElementById("S1").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("S1").style.background='#0000002d';},180);
};
const playkey_R1=()=>{
    document.getElementById("R1").click();
    document.getElementById("R1").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("R1").style.background='#0000002d';},180);
};
const playkey_G1=()=>{
    document.getElementById("G1").click();
    document.getElementById("G1").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("G1").style.background='#0000002d';},180);
};
const playkey_m1=()=>{
    document.getElementById("m1").click();
    document.getElementById("m1").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("m1").style.background='#0000002d';},180);
};
const playkey_P1=()=>{
    document.getElementById("P1").click();
    document.getElementById("P1").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("P1").style.background='#0000002d';},180);
};
const playkey_D1=()=>{
    document.getElementById("D1").click();
    document.getElementById("D1").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("D1").style.background='#0000002d';},180);
};
const playkey_N1=()=>{
    document.getElementById("N1").click();
    document.getElementById("N1").style.background='#d3cece92';
    setTimeout(()=>{document.getElementById("N1").style.background='#0000002d';},180);
};

window.addEventListener("keydown",({keyCode})=>{
     if(keyCode==49)   playkey_r0();
else if(keyCode==50)   playkey_g0();
else if(keyCode==52)   playkey_d0();
else if(keyCode==53)   playkey_n0();
else if(keyCode==51)   playkey_M0();
else if(keyCode==54)   playkey_r ();
else if(keyCode==55)   playkey_g ();
else if(keyCode==57)   playkey_d ();
else if(keyCode==48)   playkey_n ();
else if(keyCode==56)   playkey_M ();
else if(keyCode==73)   playkey_r1();
else if(keyCode==79)   playkey_g1();
else if(keyCode==75)   playkey_d1();
else if(keyCode==76)   playkey_n1();
else if(keyCode==80)   playkey_M1();
else if(keyCode==81)   playkey_S0();
else if(keyCode==87)   playkey_R0();
else if(keyCode==69)   playkey_G0();
else if(keyCode==82)   playkey_m0();
else if(keyCode==84)   playkey_P0();
else if(keyCode==89)   playkey_D0();
else if(keyCode==85)   playkey_N0();
else if(keyCode==65)   playkey_S ();
else if(keyCode==83)   playkey_R ();
else if(keyCode==68)   playkey_G ();
else if(keyCode==70)   playkey_m ();
else if(keyCode==71)   playkey_P ();
else if(keyCode==72)   playkey_D ();
else if(keyCode==74)   playkey_N ();
else if(keyCode==90)   playkey_S1();
else if(keyCode==88)   playkey_R1();
else if(keyCode==67)   playkey_G1();
else if(keyCode==86)   playkey_m1();
else if(keyCode==66)   playkey_P1();
else if(keyCode==78)   playkey_D1();
else if(keyCode==77)   playkey_N1();
else {}
})

