form1.addEventListener("submit",(e) => {
    e.preventDefault();
    err();
});

function err(){
    let notiferr = document.getElementById("error");
    let input = form1.email.value;
    let correctformat = input.search("@");
    if(input === "" || correctformat === -1 ){
    notiferr.innerText = "Valid email required";
}else{
    window.location.replace("/news-letter-signup/page2.html")
}

}