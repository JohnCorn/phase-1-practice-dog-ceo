//console.log('%c HI', 'color: firebrick')

//adds image elements to the DOM for each 🤔 image in the array

window.addEventListener("load", (event) => {
    Initialize();
});

function Initialize()
{
    DisplayImages();
    DisplayBreed();

   document.getElementById("breed-dropdown").addEventListener('change', event => FilterBreed(event));  
}


function DisplayImages()
{
    const url = "https://dog.ceo/api/breeds/image/random/4";
    //on page load, fetches the images using the url above ⬆️

    fetch(url)
    .then(response => response.json())
    .then(data => {
        for(let i =0; i < data.message.length; i++)
        {
        const img = document.createElement("img");
        img.src = data.message[i];
        document.body.appendChild(img);
        }
    })
    .catch (error => console.error("Error:", error));
}

function DisplayBreed()
{
    const url = "https://dog.ceo/api/breeds/list/all";
    //on page load, fetches all the dog breeds using the url above ⬆️
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let dogBreeds = Object.keys(data.message);
        for(let i =0; i < Object.values(data.message).length; i++)
        {
            //adds the breeds to the page in the 
            //<ul> provided in index.html
            let listedItem = document.createElement('li');
            listedItem.textContent = dogBreeds[i];

            listedItem.addEventListener('click', event => WordClick(event));

            document.getElementById("dog-breeds").append(listedItem);  
        }
    })
    .catch (error => console.error("Error:", error)); 
}

function WordClick(event)
{
    event.target.style.color = "blue";
}

function FilterBreed(event)
{
    console.log(`filterLetter: ${event.target.value}`);

    const myNode = document.getElementById("dog-breeds");  
    myNode.innerHTML = '';

    const url = "https://dog.ceo/api/breeds/list/all";
    //on page load, fetches all the dog breeds using the url above ⬆️
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let dogBreeds = Object.keys(data.message);
        for(let i =0; i < Object.values(data.message).length; i++)
        {

            if (dogBreeds[i].charAt(0) != event.target.value)
                continue;

            //adds the breeds to the page in the 
            //<ul> provided in index.html
            let listedItem = document.createElement('li');
            listedItem.textContent = dogBreeds[i];

            listedItem.addEventListener('click', event => WordClick(event));

            document.getElementById("dog-breeds").append(listedItem);  
        }
    })
    .catch (error => console.error("Error:", error)); 
}