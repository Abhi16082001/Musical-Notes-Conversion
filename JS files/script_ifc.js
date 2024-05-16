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

    // const value=document.getElementById("texty").value;
    
    function text(){
      var from,to;
      var options = document.getElementsByName('options');
  
      for (let i of options) {
      
      if (i.checked) {
          from=i.value;
        }
      }
      var option = document.getElementsByName('option');
  
      for (let i of option) {
      
      if (i.checked) {
          to=i.value; 
        }
      }
        let swar=['S','N','n','D','d','P','M','m','G','g','R','r'];
        let holes=[0,0.5,1,1.5,2,2.5,3,4,4.5,5,5.5,6];
        let skip;
        for(let i=0;i<12;i++){
          if(from==holes[i]){
            skip=i;
            break;
          }
        }
        for(let i=0;i<12;i++){
            if(to==holes[i]){
              skip=skip-i;
              break;
            }
        }

        const value2 = document.getElementById("texty2");
        const value1 = document.getElementById("willchange");
        let value = document.getElementById("texty").value;

                var word=value.split('');
                
                    for(let i=0;i<word.length;i++)
                    {
         for(let j=0;j<12;j++){
             if(!(word[i].localeCompare(swar[j]))){
                 j=j+skip;
                 if(j<0) j=j+12; 
                 word.splice(i,1,swar[j]); 
                 break;
             }
         }
} 
var wordd=word.join(' ');

value1.innerHTML=" Converted flute notes are : ";
value2.innerHTML=wordd;
    }

