 //Create an array of object, the objects will describe a race bicycle with this propriety:

 //name :
 //weight :

 //stamp on screen the bike with minor weight


 //create the array

 const bicycles = [
    {
    name : 'La velocista',
    weight : 20
  },

  {
    name : 'Il sogno di Gloria',
    weight : 18
  },

  {
    name : 'Il rinascente',
    weight : 20
  },

  {
    name : 'Quello di ieri',
    weight : 16
  },

  {
    name : 'Guarda Avanti',
    weight : 18
  }

]

//add a variable for weight with starting index position to cycle
let lightestBycicle = bicycles [0]
//cycle the array to get elements
for (let i = 0; i < bicycles.length; i++) {
    const CurrentBycicle = bicycles[i]; //get the single variable index
    //IF our currentBycicle weight is < of the lightestBycicle weight, lightestBycicle = CurrentBycicle

    if (CurrentBycicle.weight < lightestBycicle.weight ) {
        lightestBycicle = CurrentBycicle
    }

    
}
console.log(lightestBycicle);

//DOM node for output


const lightestBycicleEl = document.getElementById('lightest-bycicle')

lightestBycicleEl.innerText = `The lightest bycicle is: "${lightestBycicle.name}", with a weight of ${lightestBycicle.weight} kg`