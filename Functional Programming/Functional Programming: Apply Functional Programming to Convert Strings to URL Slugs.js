// the global variable
var globalTitle = "Winter      Is    Coming";

// Add your code below this line
function urlSlug(title) {
    let reg = /\W/;
    return title.split(reg).filter((value) => {
        if(value !== ""){
        	return true;
        }
        return false;
    }).join("-").toLowerCase();

}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);
