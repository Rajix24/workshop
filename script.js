const elementBtn = document.getElementById("testing");
const players = document.getElementById("players");
const showPopUp = document.getElementById("pop-hero");
const hiddenHero = document.getElementById("hero");
const closepopbtn = document.getElementById("popUp-close");
const addpopupbtn = document.getElementById("popUp-Add");
const closepoup = document.getElementsByClassName("closepop");
// console.log(showPopUp);
// console.log(players)







//that is the function for the adding some player
elementBtn.addEventListener("click", ()=>{
showPopUp.style.display = "flex";
hiddenHero.style.display = "none";
    players.innerHTML += `
                <div  class="player">
                    <div class="photoPlayer">
                    </div>
                    <div class="infoPlayer">
                        <a class="playerName" href="./joueurs.html"> <h3>${name}</h3></a>
                        <div class="infoPlayerText">
                            <p class="email">${position}</p>
                            <p class="email">${price}</p>
                        </div>
                    </div>
                    <div class="playerButtons">
                        <button class="addToCompitition">+Add</button>
                        <button class="editplayer">Edit</button>
                    </div>
                </div>

    `
})

//function taht clowes the popUp
function closePopUp (){
    

}

















