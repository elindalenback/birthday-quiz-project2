function setupSignUpButton() {
    /** Connect js to the sign-up-btn in html */
    let signUpBtn = document.getElementById("sign-up-btn");

    /** When button is clicked - function */
    signUpBtn.addEventListener("click", function (e) {
        displaySignUpPage();
    });
}
/**
 * This function will:
 * 1. Start when clicking the 'sign-up-btn'
 * 2. Hide the 'Welcome-everyone' - message
 * 3. Display the 'Sign-up' - form
 */
function displaySignUpPage() {
    // Remove the existing elements with class 'hello-page' by adding class 'hide'
    let helloPage = document.getElementById("hello-page");
    helloPage.classList.add('hide');
    let signUpBtn = document.getElementById("sign-up-btn");
    signUpBtn.classList.add('hide');
    // Show Sign Up Page by removing class 'hide'
    let signUpPage = document.getElementById("sign-up-page");
    signUpPage.classList.remove('hide');
}

setupSignUpButton();

function setupLetsGoButton() {
    /** Connect js to the slets-go-btn in html */
    let letsGoButton = document.getElementById("lets-go-btn");

    /** When button is clicked - function */
    letsGoButton.addEventListener("click", function (e) {
        displayQuizRules();
    });

    /**
 * This function will:
 * 1. Start when clicking the 'lets-go-btn'
 * 2. Hide the 'Sign-up' - page
 * 3. Display the 'Quiz-Rules' - page
 */
    function displayQuizRules() {
        // Get the parent element
        let messageType = document.getElementById("message-type");

        // Remove the existing elements with class 'hello-page'
        let signUpPages = document.querySelectorAll(".sign-up-page");
        signUpPages.forEach(function (element) {
            element.remove();
        });
    }
}