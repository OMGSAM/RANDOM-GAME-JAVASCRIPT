 



function generate()
{
    var cmp=0;
    var nbr=Math.floor(Math.random()*10) ;
    var essai=prompt("donnez un numero au hasard :") ;
cmp=1;
while (essai!=nbr)

    if (essai<nbr)
    
   { 
       essai=prompt("un peu plus  grande ! ") ;
cmp++; }

    else 
{ 
    essai=prompt("un peu petit ! ") ;
cmp++; }

alert("Bravo champion tu as fais  " + cmp + " tentatives");

}
generate();
    
