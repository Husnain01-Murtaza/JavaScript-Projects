let h=document.querySelectorAll("#b");

let u=document.querySelector(".reset");

let turn=true;





let winningCombos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function colorchange(){

    h.innerHTML="X";

}



for(let i=0;i<h.length;i++){

        h[i].addEventListener("click",function(){
            if(this.innerHTML!=="")return;
            if(turn){

                this.innerHTML="X";

                this.classList.add("x-style");

                turn=false;

            }

            else if(!turn){

                this.innerHTML="O";

                this.classList.add("o-style");

                turn=true;

               

            }

            checkWinner();

            document.getElementById("turn").innerHTML=turn?"X":"O";

           

        }

    );

       

}



function checkWinner(){

    let iswin=false;

   for(let i of winningCombos){

 

    let pos1=h[i[0]].innerText;

    let pos2=h[i[1]].innerText;

    let pos3=h[i[2]].innerText;

   

   if(pos1!=="" && pos2!=="" && pos3!==""){

    if(pos1===pos2 && pos2===pos3){

        console.log("Winner is " + pos1);

       

        document.querySelector(".winner").innerHTML="&#127881; Congratulations " + pos1 + " is the winner! &#127881;";

       

         h[i[0]].style.backgroundColor="yellow";

         h[i[1]].style.backgroundColor="yellow";

         h[i[2]].style.backgroundColor="yellow";

        disable();

        iswin=true;

        break;

        }

       

       }

       

   }

 if(!iswin){

        tie();

     }

}





const disable=()=>{

    for(let i of h){

        i.disabled=true;

    }

};



const enable=()=>{

    for(let i of h){

        i.disabled=false;

        i.innerText="";
        i.classList.remove("x-style", "o-style");

        }

};



const reset=()=>{

    turn=true;

    enable();

    document.querySelector(".winner").innerHTML="";
    document.getElementById("turn").innerHTML="X";
    for(let i of h){

        i.style.background = "";

    }

};



const newGame=()=>{

    reset();

};



const tie=()=>{

    if(h[0].innerText!=="" && h[1].innerText!=="" && h[2].innerText!=="" && h[3].innerText!=="" && h[4].innerText!=="" && h[5].innerText!=="" && h[6].innerText!=="" && h[7].innerText!=="" && h[8].innerText!==""){

    document.querySelector(".winner").innerHTML="🤝 It's a tie! 🤝";

    for(let i of h){

        i.disabled=true;

        i.style.backgroundColor="#f4f0e3";

    }

}

};

