
function getJoke(){
  randomJoke();
}//getJoke()

async function randomJoke() {  

  const getData = await fetch(`https://api.chucknorris.io/jokes/random`);
  const dataResponse = await getData.json();

    console.log(dataResponse.value);
    document.getElementById('jokesBox').innerHTML= dataResponse.value;
} //randomJoke()
