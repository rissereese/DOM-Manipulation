const filterButton = document.getElementById("filterButton");
const filterContent = document.getElementById("filterContent");

const newContent = document.getElementById("newContent");
const addNewButton = document.getElementById("addButton");

const opinionCheckbox = document.getElementById("opinionCheckbox");
const recipeCheckbox = document.getElementById("recipeCheckbox");
const updateCheckbox = document.getElementById("updateCheckbox");

filterContent.style.display = "none";

newContent.style.display = "none";

/*When the user clicks the "Filter Articles" button, 
a menu appears with the checkboxes to filter.  
checkboxes found under id=filterContent*/
function showFilter() {
    if (filterContent.style.display === "none") {
        filterContent.style.display = "block";
    } 
    else {
        filterContent.style.display = "none";
    }
}

/*When the user clicks the "Add New Article" button, a form appears.
When the user enters a new article and presses "Add New Article", 
the content appears in the list with the correct styles.
textboxes found in id=newContent
 */

function showAddNew() {
    if (newContent.style.display === "none") {
        newContent.style.display = "block";
    }
    else {        
        newContent.style.display = "none";
    }
}

capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
function addNewArticle() {
    const newArticle = document.createElement("article");

    const inputHeader = document.getElementById("inputHeader").value;
    var articleType = document.querySelector("input[name='articleType']:checked").id;
    const inputArticle = document.getElementById("inputArticle").value;

    if (!articleType) {
        alert("Please select an article type.");
        return;
    }
    if (articleType === "opinionRadio") {
        articleType = "opinion";
    }
    if (articleType === "recipeRadio") {
        articleType = "recipe";
    }
    if (articleType === "lifeRadio") {
        articleType = "update";
    }
    newArticle.classList.add(articleType);
    newArticle.id = "a" + Date.now();
    newArticle.innerHTML = `
        <span class="marker">${capitalize(articleType)}</span>
        <h2>${inputHeader}</h2>
        <p>${inputArticle}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;
    document.getElementById("articleList").appendChild(newArticle);
    
}


/**When the user checks/unchecks a box for filtering, 
 * each of the articles of that type are hidden/shown accordingly.
 */
function filterArticles() {
    let opinionArticle = document.querySelectorAll("article.opinion");
    let recipeArticle = document.querySelectorAll("article.recipe");
    let updateArticle = document.querySelectorAll("article.update");

    // opinionArticle.forEach(article => article.style.display = "block");
    // recipeArticle.forEach(article => article.style.display = "block");
    // updateArticle.forEach(article => article.style.display = "block");

    opinionArticle.forEach(article => 
        article.style.display = opinionCheckbox.checked ? "block" : "none"
    );
    recipeArticle.forEach(article => 
        article.style.display = recipeCheckbox.checked ? "block" : "none"
    );
    updateArticle.forEach(
        article => article.style.display = updateCheckbox.checked ? "block" : "none"
    );
}