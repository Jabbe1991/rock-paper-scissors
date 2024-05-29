
const options = ['rock', 'paper', 'scissors']

function play(choice) {
    const number = Math.floor(Math.random() * 3);
    console.log("dennis äger", choice)
    console.log("computer choice", options[number])
}

