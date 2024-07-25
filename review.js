let submit = document.getElementById("submit");
let fname;
let lname;
let comment;
let movie;
let src;


function addComment() {

    let count = (window.localStorage.length) + 1;

    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    comment = document.getElementById("comment").value;
    movie = document.getElementById("movietxt").value;
    src = document.getElementById("src").value;

    window.localStorage.setItem(`C${count}`, `${fname};${lname};${comment};${movie};${"images\\"+src.split("\\")[2]}`);

}

submit.onclick = function () {
    addComment();

    
};

let section = document.createElement("section");
section.setAttribute("class", "main");
document.body.appendChild(section);




for (var i = 1; i <= localStorage.length; i++) {
    
    // creating div for every comment
    var review = document.createElement("div");
    section.appendChild(review);
    review.setAttribute("class", "review");

    var photo = document.createElement("img");
    review.appendChild(photo);
    photo.setAttribute("src", `${window.localStorage.getItem(`C${i}`).split(";")[4]}`);

    var namee = document.createElement("strong");
    review.appendChild(namee);
    namee.setAttribute("class", "name");
    var nameText = document.createTextNode(`${window.localStorage.getItem(`C${i}`).split(";")[0] +" "+ window.localStorage.getItem(`C${i}`).split(";")[1]}`);
    namee.appendChild(nameText);

    var mov = document.createElement("p");
    review.appendChild(mov);
    mov.setAttribute("class","mov")
    var movtxt = document.createTextNode(`${window.localStorage.getItem(`C${i}`).split(";")[3]}`);
    mov.appendChild(movtxt);

    var com = document.createElement("p");
    review.appendChild(com);
    com.setAttribute("class", "com");
    var pText = document.createTextNode(`${window.localStorage.getItem(`C${i}`).split(";")[2]}`);
    com.appendChild(pText);

    

}