let pokemonList = [
  //pokemon objects
 {name:"Bulbasaur", height:"7", types:["grass","poison"] },
 {name:"Jigglypuff", height:"5", types:["fairy","normal"]},
 {name:"Pidgeotto", height:"11", types:["flying","normal"]}
 ];


 pokemonList.forEach ( item => console.log(item));

 
let pokemonRepository = (function (){
   
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass', 'poison']
    },
    {
      name: 'Jigglypuff',
      height: 5,
      types: ['fairy', 'normal']
    },
    {
      name:'Pidgeotto',
      height: 11,
      types: ['flying', 'normal']
    }
  ]
   function getAll () {
      return pokemonList;
   }
   function add (pokemon){
      pokemonList.push (pokemon);
   }
   
   return {
        getAll: getAll,
        add: add
   }


})()

console.log (pokemonRepository.getAll())
  


