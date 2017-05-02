var days = 7;
var productArray = [0, 0, 0, 0];
var tittel = ["cola", "pepsi", "fanta", "sprite"];
var bilde = ["bilder/cola.jpg", "bilder/pepsi.jpg", "bilder/fanta.jpg", "bilder/sprite.jpg"];
var price = ["29 kr", "39 kr", "49 kr", "59 kr"];
var newProductArray = [];
var totalsum = 0;
var numbProducts = 0;
/* Creates cookie */
function createCookie() {
    var d = new Date();
    d.setDate(d.getDate() + days);
    var expires = ";expires=" + d;
    var value = productArray.toString();
    document.cookie = "product=" + value + expires + ";";
}