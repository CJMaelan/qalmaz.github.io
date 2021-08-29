function bishBoshCalculator () {

    var total = document.getElementById("volume").value;
    var bishNr = document.getElementById("bish").value;
    var boshNr = document.getElementById("bosh").value;
    var bbList = document.getElementById("bbUl");
    bbList.innerHTML="";
    for (let x = 1; x <= total; x++) {
        var listItem = document.createElement("li");

        if (x % bishNr == 0 && x % boshNr == 0){
            listItem.innerHTML ="Bish-Bosh";
            listItem.className = "green";
            bbList.appendChild(listItem);
        }
        else if (x % bishNr == 0){
            listItem.innerHTML = "Bish";
            listItem.className = "red";
            bbList.appendChild(listItem);
        }
        else if (x % boshNr == 0) {
            listItem.innerHTML= "Bosh";
            listItem.className = "blue";
            bbList.appendChild(listItem);
        }
        else {
            listItem.innerHTML = x;
            bbList.appendChild(listItem);
        }
    }
}

