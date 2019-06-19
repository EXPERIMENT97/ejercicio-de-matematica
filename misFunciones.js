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
    alert("Bienevenido a mi pagina. Espero que les guste.")
}
function saludar1() {
    alert("Bienvenido a Segementos y Angulos.")
}
function saludar2() {
    alert("Bienvenido a Area, Perimetro y Volumen")
}
function Atri() {
    document.opeMat.area_tri.value = Number(document.opeMat.A.value) + Number(document.opeMat.B.value) + Number(document.opeMat.C.value);
}
function Ptri() {
    document.opeMat.perimetro_tri.value = (Number(document.opeMat.base.value) * Number(document.opeMat.altura.value)) / 2;
}
function Ap() {
    document.opeMat.area_p.value = 2 * (Number(document.opeMat.altura.value) + Number(document.opeMat.base.value));
}
function Pp() {
    document.opeMat.perimetro_p.value = Number(document.opeMat.base_pp.value) * Number(document.opeMat.altura_pp.value);
}
function Are() {
    document.opeMat.area_re.value = Number(document.opeMat.base.value) * Number(document.opeMat.altura.value);
}    //document.opeMat.pe.value = 2 *( (Number(document.opeMat.lado_br.value) + Number(document.opeMat.lado_ar.value)));

function Pre() {
    document.opeMat.perimetro_re.value = 2 *( Number(document.opeMat.lado_br.value) + Number(document.opeMat.lado_ar.value));
    //var total = document.getElementById("totalPre");
    //var a = parseInt(document.getElementById("numpr1").value);
    //var b = parseInt(document.getElementById("numpr2").value);
    //totalLado = 2 * (a + b);
    //total.value = totalLado;
}
function Acua() {
    document.opeMat.area_cua.value = Number(document.opeMat.altura.value)
}
function Pcua() {
    document.opeMat.perimetro_cua.value = 4 * Number(document.opeMat.altura_cua.value);
}
function Aro() {
    document.opeMat.area_ro.value = (Number(document.opeMat.Diagonal_mayor_o_lado.value) * Number(document.opeMat.diagonal_menor_o_altura.value)) / 2;
}
function Pro() {
    document.opeMat.perimetro_ro.value = 4 * Number(document.opeMat.altura.value);
}
function Atra() {
    document.opeMat.area_tra.value = Number(document.opeMat.Base_mayor.value) + Number(document.opeMat.base_menor.value) + Number(document.opeMat.lado_c.value) + Number(document.opeMat.lado_d.value);
}
function Ptra() {
    document.opeMat.perimetro_tra.value = ((Number(document.opeMat.Base_mayor.value) + Number(document.opeMat.base_menor.value)) * Number(document.opeMat.altura.value)) / 2;
}
function Acir() {
    //document.opeMat.area_cir.value = Number(document.opeMat..value) * Number(document.opeMat.radio.value) ^ 2;
}
function Pcir() {
    //document.opeMat.perimetro_cir.value = 2* Number(document.opeMat..value) * Number(document.opeMat.radio.value);
}