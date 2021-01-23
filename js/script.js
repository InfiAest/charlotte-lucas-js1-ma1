const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();


// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// question 3

heading.style.fontSize = "2em";


// question 4

heading.className = "subheading";


// question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    
    paragraphs[i].style.color = "red";
}


// question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";

resultsContainer.style.backgroundColor = "yellow";


// question 7

function makeList(list) {

    for (let i = 0; i < list.length; i++) {
        
        console.log(list[i].name);
    }

}

makeList(cats);


// question 8

let catsHtml = "";
const container = document.querySelector(".cat-container");


function createCats(cats) {

    for (let i = 0; i < cats.length; i++) {

        let age = "Unknown age";

        if (cats[i].age) {
            age = cats[i].age
        }

        catsHtml += `<div>
                        <h5>${cats[i].name}</h5>
                        <p>${age}</p>
                    </div>
                    `;

    }

    return catsHtml;
}

createCats(cats);

container.innerHTML = catsHtml;