// Question 1

/*  Answer Q1:
    const cat = {
        complain: function(){
        console.log("Meow!");
        }
    } 
*/

// Question 2

/*  Answer Q2:
    const heading = document.querySelector("h3");
*/

// Question 3 

/*  Answer Q3:
    heading.style.fontSize = "2em";
*/

// Question 4

/* Answer Q4:
    heading.classList.add("subheading");
*/

// Question 5

/*  Answer Q5:
    const paragraphs = document.querySelectorAll("p");
*/

// Question 6

/*  Answer Q6:
    const resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = "<p>New paragraph</p>";
*/

// Question 7

/*  Answer Q7:
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

    function catName(catArray){
        for(let i = 0; i < catArray.length; i++){
        console.log(catArray[i].name);
        }
    }

    catName(cats);
*/

// Question 8

/*  Answer Q8:
    let catHTML = "";

    function catName(catArray){
        for(let i = 0; i < catArray.length; i++){
            catHTML += `<h5>${catArray[i].name}</h5>`;
        }
        return catHTML;
    }

    catName(cats);

*/

// Question 9

/* Answer Q9:
    let catHTML = "";

    function catName(catArray){
        for(let i = 0; i < catArray.length; i++){
            catHTML += `<h5>${catArray[i].name}</h5>`;
        }
        return catHTML;
    }

    catName(cats);

    resultsContainer.innerHTML = catHTML;
*/

// Question 10

/*  Answer Q10:
    let catHTML = "";

    for (let i = 0; i < cats.length; i++){
        let ageValue = "Age unknown";

        if(cats[i].age){
            ageValue = cats[i].age;
        }

        const details = `<div>
                            <h5>${cats[i].name}</h5>
                            <p>${ageValue}</p>
                        </div>`;

        catHTML += details;
    }

    resultsContainer.innerHTML = catHTML;
*/