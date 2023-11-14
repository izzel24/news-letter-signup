

form1.addEventListener("submit",(e) => {
    e.preventDefault();
    err();
});

function err(){
    let notiferr = document.getElementById("error");
    let input = form1.email.value;
    let err = document.getElementById("email")
    let correctformat = input.search("@");
    if(input === ""  ){
    notiferr.innerText = "Valid email required";
    err.classList.add("err");
}else if(correctformat === -1){
    notiferr.innerText = "Valid email required";
    err.classList.add("err");
}else{
    window.location.replace("news-letter-signup/page2.html?email=" + encodeURIComponent(input));
}
}
