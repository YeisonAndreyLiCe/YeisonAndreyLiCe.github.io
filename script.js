function changeName() {
    var name = document.querySelector("#name");
    name.innerText = "New Name";
}

var request = document.querySelector("#request");
var connections = document.querySelector("#connections_number");
var number = 500;

function a(id) {
    var element = document.querySelector(id);
    element.remove();
    request.value--;
    number++;
    connections.innerText = number + "+"; 
}
function decline(id) {
    request.value--;
    var element = document.querySelector(id);
    element.remove();
}

/*var number = document.querySelector(".request_number");
var count = number.value; 
var connections = document.querySelector(".connections_number");
var connectionsCount = 500;

function remove1(element) {
    var contact1 = document.querySelector(".usercontact1");
    contact1.remove()
    count--;
    number.value = count;
    if(element.classList.includes("check")) {
        connectionsCount++;
        connections.innerText = connectionsCount + "+";
    } else {
        connectionsCount--;
        connections.innerText = connectionsCount + "+";
    }
}
function remove2(element) {
    var contact2 = document.querySelector(".usercontact2");
    contact2.remove()
    count--;
    number.value = count;
    console.log(element.classList)
    if(element.classList.includes("check")){
        connectionsCount++;
        connections.innerText = connectionsCount + "+";
    } else {
        connectionsCount--;
        connections.innerText = connectionsCount + "+";
    }
}*/