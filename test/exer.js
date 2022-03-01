function run(){

    let me = {
    name: "David Rayy",
    sclass: "VI",
    rollno: "12",
    };
    
    let properties = [];
    for (let i in me) {
    properties.push(i);
    }

    document.getElementById("output").innerHTML = properties;
}