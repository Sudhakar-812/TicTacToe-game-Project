let player = "X";
let count=0;
let a = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

function switchPlayer(){
    if(player == "X"){
        player = "O";
    }
    else{
        player="X";
    }
}

function move(p){
    let b=document.getElementsByTagName('td')[p];
    
    if(player==="X" && a[p]===' '){
        b.style.backgroundImage='url(./images/X-removebg-preview.png)';
        b.style.backgroundSize="100% 100%";
        count++;
    }
    else if(player === "O" && a[p]===' '){
        b.style.backgroundImage='url(./images/O-removebg-preview-removebg-preview.png)';
        b.style.backgroundSize="100% 100%";
        count++;
    }
    else{
        alert("Wrong move");
        return 0;
    }
    a[p]=player;
    let z = document.getElementById('d1');
    let z1 = document.getElementById('d3');
    let z2 =document.getElementById('d5');
    if(winner()){
        if(player==="X"){
            z.style.display='block';
            z.style.position='absolute';
            z.style.top='10px';
            // alert("Winner "+player);
        }
        else{
            z1.style.display='block';
            z1.style.position='absolute';
            z1.style.top='10px';
        }    
    }
    if(count==9 && !winner()){
        z2.style.display='block';
    }
    switchPlayer();
}

function winner(){

    if(((a[0]==player && a[1]==player && a[2]==player)||
        (a[3]==player && a[4]==player && a[5]==player)||
        (a[6]==player && a[7]==player && a[8]==player))||

        ((a[0]==player && a[3]==player && a[6]==player)||
        (a[1]==player && a[4]==player && a[7]==player)||
        (a[2]==player && a[5]==player && a[8]==player))||
        
        ((a[0]==player && a[4]==player && a[8]==player)||
        (a[2]==player && a[4]==player && a[6]==player))
    ){
        return true;
    }
    else{
        return false; 
    }
}

function replay(){
    location.reload();
}

let da = new Date();
document.getElementById('date').innerHTML= da.getDate()+"-"+da.getMonth()+"-"+da.getFullYear();

let db = new Date();
document.getElementById("time").innerHTML=db.getHours()+":"+db.getMinutes();
