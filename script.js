//  PAGINA 1   //

function sim(){
    location.href = "Lobby.html";
}

function desvia(t){
    var btn = t;
    console.log(btn);
    console.log("desviei");

    btn.style.postion = 'absolute';
    btn.style.bottom = geraposicao(20, 80);
    btn.style.left = geraposicao(20, 80);

}

function geraposicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}

//  LOBBY   //


function click1(){
    window.open("https://docs.google.com/document/d/1jawuB1Q22Fd2gsl08hPQClNZ4tGLvZLcnQqnKP8oB4I/edit?usp=drive_link")
    location.href = "Presente1.html";
}