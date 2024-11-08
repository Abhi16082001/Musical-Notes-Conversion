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


    // const value=document.getElementById("texty").value;
    
    function text(){
        const value2 = document.getElementById("texty2");
        const value1 = document.getElementById("willchange");
        let value = document.getElementById("texty").value;
                const word=value.split('');
                    for(let i=0;i<word.length;i++)
                    {

     if(!(word[i].localeCompare("A")) && !(word[i+1].localeCompare("#")))  { word.splice(i,1,"n"); word.splice(i+1,1," ");}
else if(!(word[i].localeCompare("C")) && !(word[i+1].localeCompare("#")))  { word.splice(i,1,"r"); word.splice(i+1,1," ");}
else if(!(word[i].localeCompare("D")) && !(word[i+1].localeCompare("#")))   {word.splice(i,1,"g"); word.splice(i+1,1," ");}
else if(!(word[i].localeCompare("F")) && !(word[i+1].localeCompare("#")))   {word.splice(i,1,"M"); word.splice(i+1,1," ");}
else if(!(word[i].localeCompare("G")) && !(word[i+1].localeCompare("#")))   {word.splice(i,1,"d"); word.splice(i+1,1," ");}
else if(!(word[i].localeCompare("A")))   word.splice(i,1,"D");
else if(!(word[i].localeCompare("B")))   word.splice(i,1,"N");
else if(!(word[i].localeCompare("C")))   word.splice(i,1,"S");
else if(!(word[i].localeCompare("D")))   word.splice(i,1,"R");
else if(!(word[i].localeCompare("E")))   word.splice(i,1,"G");
else if(!(word[i].localeCompare("F")))   word.splice(i,1,"m");
else if(!(word[i].localeCompare("G")))   word.splice(i,1,"P");
else if(!(word[i].localeCompare(" ")))   word.splice(i,1," "); 
else word.splice(i,1,"*");
}
var wordd=word.join(' ');

value1.innerHTML=" These are Equivalent flute notes : ";
value2.innerHTML=wordd;
    }