function colorchange(){
    let color = document.getElementById("colorSelect");
    let p = document.getElementsByTagName("p")[0];
    p.style.color = color.value;
}