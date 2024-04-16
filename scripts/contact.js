// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submitButton = document.getElementById("submit-button")
let contactPage = document.getElementById("contact-page")
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function newContent() {
    contactPage.innerHTML = "<p> Test test <p>";
}

submitButton.addEventListener('click',newContent)