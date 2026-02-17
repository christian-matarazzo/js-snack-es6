//Create an array with football club inside
// give only name, other parameter to 0

const footballClubs = [
    {
        name: 'Avellino',
        point: 0,
        penality: 0,


    },
    {
        name: 'Benevento',
        point: 0,
        penality: 0,


    },
    {
        name: 'Salernitana',
        point: 0,
        penality: 0,


    },
    {
        name: 'Napoli',
        point: 0,
        penality: 0,


    },
        {
        name: 'Casertana',
        point: 0,
        penality: 0,


    },
]

//create a random number function
function randomNumbers() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber
}


// use 1 empty array to .push the name and point IF the point and penality is not 0
let footballTeamPoints = []

/* console.log(randomNumbers()); */
//FOR to cycle the array
for (let i = 0; i < footballClubs.length; i++) {
    const footballClub = footballClubs[i]; //to check single obj

    
    // IF point and penality = 0, use randomNumbers to populate it
    if (footballClub.point === 0 && footballClub.penality === 0)
        footballClub.point = randomNumbers()
        footballClub.penality = randomNumbers()

        //IF the variables are populated, push the name and the point in one single array 
        if (footballClub.point != 0 && footballClub.penality != 0) {
            footballTeamPoints.push(footballClub.name, footballClub.penality)
            
        }

        
        console.log(footballClub.point, "This are the points");
    }
    
    console.log(footballTeamPoints);


