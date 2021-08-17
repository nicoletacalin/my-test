let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

let JaneScore = data[0].score
console.log(JaneScore)

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  event.preventDefault()
  button.innerHTML = JaneScore;

});
