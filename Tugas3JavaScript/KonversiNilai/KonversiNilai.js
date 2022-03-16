var nilai = document.getElementById("nilai");
var huruf = document.getElementById("huruf");


function Konversi() {

    if (nilai.value <= 40)
        huruf.value = "E"

    else if (nilai.value <= 55)
        huruf.value = "D"

    else if (nilai.value <= 60)
        huruf.value = "C"

    else if (nilai.value <= 70)
        huruf.value = "B"

    else if (nilai.value <= 80)
        huruf.value = "AB"

    else if (nilai.value <= 100)
        huruf.value = "A"

    else
        huruf.value = " Angka di luar jangkauan"
    let output = nilai.value;
    huruf.value = output();
}