function showMessage() {
    alert("Welcome 🚀");
}
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully 🚀");
    return true;
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}