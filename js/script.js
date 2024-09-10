
let myName = document.getElementById('name');
myName.addEventListener("blur", () => {

    let x = myName;

    x.value = x.value.toUpperCase();

    // if (x.type === "password") {
    //     x.type = "text";

    // } else {
    //     x.type = "password";
    // }

});


myName.addEventListener("focus", () => {
    let x = myName;
    x.value = x.value.toLowerCase();
});