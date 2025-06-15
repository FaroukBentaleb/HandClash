import  TheAI  from "./API_call.js";
let PlayerChoice = "";
let AIChoice = "";
let choices = "";
let choicesJSON = "";
async function Played(choice){
    PlayerChoice = choice;
    document.getElementById("player").innerHTML = "<img src='img/" + choice + ".png' style='width:100px; height:100px; border: 1px solid black; border-radius:50%; object-fit:cover;'>";
    await AI_choice();
    document.getElementById("result").innerHTML = "<p>" + Clash(PlayerChoice,AIChoice) + "</p>";
    saveChoice(PlayerChoice);
}
async function AI_choice(){
    const reponse = await TheAI("Choose exactly one word from this list: rock, paper, scissors. Respond with only that word in lowercase letters. Do not add spaces, newlines, punctuation, or any extra characters—only the exact word.These are the past choices of the player" + loadChoices());
    AIChoice = reponse;
    console.log(typeof(AIChoice));
    document.getElementById("AI").innerHTML = "<img src='img/" + reponse + ".png' style='width:100px; height:100px; border: 1px solid black; border-radius:50%; object-fit:cover;'>";
}

function Clash(PlayerChoice, AIChoice) {
    let result = "";
    if (PlayerChoice === "rock") {
        console.log("AIChoice: " + AIChoice);
        switch (AIChoice) {
            case "rock":
                result = "Tie";
                break;
            case "paper":
                result = "Loss";
                break;
            case "scissors":
                result = "Win";
                break;
            default:
                result = "Invalid AI choice";
        }
    } else if (PlayerChoice === "paper") {
        switch (AIChoice) {
            case "rock":
                result = "Win";
                break;
            case "paper":
                result = "Tie";
                break;
            case "scissors":
                result = "Loss";
                break;
            default:
                result = "Invalid AI choice";
        }
    } else if (PlayerChoice === "scissors") {
        switch (AIChoice) {
            case "rock":
                result = "Loss";
                break;
            case "paper":
                result = "Win";
                break;
            case "scissors":
                result = "Tie";
                break;
            default:
                result = "Invalid AI choice";
        }
    } else {
        result = "Invalid Player choice";
    }
    return result;
}

function loadChoices() {
  const data = localStorage.getItem("PlayerChoices");
  console.log("Data: "+data);
  return data ? JSON.parse(data) : [];
}

function saveChoice(newChoice) {
  const choices = loadChoices();
  console.log("Loaded choices before adding:", choices);
  choices.push(newChoice);
  localStorage.setItem("PlayerChoices", JSON.stringify(choices));
  console.log("Choice saved:", newChoice);
}


document.getElementById("btn-rock").addEventListener("click", () => Played("rock"));
document.getElementById("btn-paper").addEventListener("click", () => Played("paper"));
document.getElementById("btn-scissors").addEventListener("click", () => Played("scissors"));