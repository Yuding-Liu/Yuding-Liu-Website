const pieceSelectedIndicator1 = document.getElementById("pieceSelectedIndicator1");

if (pieceSelectedIndicator1.getAttribute("data-row") == -1 || pieceSelectedIndicator1.getAttribute("data-col")) {
    pieceSelectedIndicator1.style.opacity = "0";
}

