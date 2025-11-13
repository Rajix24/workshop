//selecting element of sideBar:
// const addPlayer = document.getElementById(addingPlayer);
const addPlayer = document.getElementById('addingPlayer');
console.log(addPlayer);




// adding function 
//filter function
//affiche function 
//adding to container 
//edit smal information


async function elementSizeBar() {
   let response = await fetch("data.json")//that is gitting data
   let data = await response.json()//that is return data to object 
    console.log(data)
}































//what we neet to go in the side bar is this functions 
//function Ajouter un joueur
//function Modifier un joueur
//function Supprimer un joueur