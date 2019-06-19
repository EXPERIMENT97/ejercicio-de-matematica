/**
 * Created by Lucas on 17/5/2019.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function saludar_inicio() {
    alert("Bienevenido a mi pagina. Espero que les guste.");
}
function saludar1() {
    alert("Bienvenido a Segementos y Angulos.");
}
function saludar2() {
    //alert("Bienvenido a Area, Perimetro y Volumen");
}
function Ptri() {
    var A = document.getElementById("numptri1").value;
    var B = document.getElementById("numptri2").value;
    var C = document.getElementById("numptri3").value;
    document.getElementById("totalPtri").value = Number(A) + Number(B) + Number(C);
}
function Atri() {
    var base_tri = document.getElementById("numatri1").value;
    var altura_tri = document.getElementById("numatri2").value;
    document.getElementById("totalAtri").value = (Number (base_tri) * Number(altura_tri))/2;
}
function Pp() {
    var altura_pp = document.getElementById("numpp1").value;
    var base_pp = document.getElementById("numpp2").value;
    document.getElementById("totalPp").value = 2 * (Number(altura_pp) + Number(base_pp));
}
function Ap() {
    var altura_ap = document.getElementById("numap1").value;
    var base_ap = document.getElementById("numap2").value;
    document.getElementById("totalAp").value = Number(altura_ap) * Number(base_ap);
}
function Pre() {
    var base_re = document.getElementById("numpre1").value;
    var altura_re = document.getElementById("numpre2").value;
    document.getElementById("totalPre").value = Number(base_re) * Number(altura_re);
}

function Are() {
    var lado_br = document.getElementById("numare1").value;
    var lado_ar = document.getElementById("numare2").value;
    document.getElementById("totalAre").value = 2 * (Number(lado_br) + Number(lado_ar));
}
function Pcua() {
    var altura_pcua = document.getElementById("numpc1").value;
    document.getElementById("totalPcu").value = Number(altura_pcua);
}
function Acua() {
    var altura_acua = document.getElementById("numac1").value;
    document.getElementById("totalAcua").value = 4 * Number(altura_acua);
}
function Pro() {
    var Diagonal_mayor_o_lado = document.getElementById("numpro1").value;
    var diagonal_menor_o_lado = document.getElementById("numpro2").value;
    document.getElementById("totalPro").value = (Number(Diagonal_mayor_o_lado) * Number(diagonal_menor_o_lado)) /2;
}
function Aro() {
    var altura_aro = document.getElementById("numaro1").value;
    document.getElementById("totalAro").value = 4 * Number(altura_aro);
}
function Ptra() {
    var Base_mayor = document.getElementById("numptra1").value;
    var base_menor = document.getElementById("numptra2").value;
    var lado_c = document.getElementById("numptra3").value;
    var lado_d = document.getElementById("numptra4").value;
    document.getElementById("totalPtra").value = Number(Base_mayor) + Number(base_menor) + Number(lado_c) + Number(lado_d);
}
function Atra() {
    var Base_mayor = document.getElementById("numatra1").value;
    var base_menor = document.getElementById("numatra2").value;
    var altura_tra = document.getElementById("numatra3").value;
    document.getElementById("totalAtra").value = ((Number(Base_mayor)+ Number(base_menor)) * Number(altura_tra)) / 2;
}
function Pcir() {
    //var
    //document.opeMat.area_cir.value = Number(document.opeMat..value) * Number(document.opeMat.radio.value) ^ 2;
}
function Acir() {
    //document.opeMat.perimetro_cir.value = 2* Number(document.opeMat..value) * Number(document.opeMat.radio.value);
}