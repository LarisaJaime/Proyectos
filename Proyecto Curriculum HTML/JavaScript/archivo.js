function f_botton_1() {
  var txt="*Disponibilidad horaria Full time. *Disponibilidad para incorporación inmediata.";
  document.getElementById("Info_Extras").textContent=txt;
  document.getElementById("Info_Extras").style.color = "brown";
}

function f_botton_2() {
  var txt="*Morales Consuelo, Gerente de administración, cel:3512344467. *Acosta Leandro, Abogado, cel:3513452221.  *Recursos Humanos, Grupo Dinosaurio, tel:4802222 int 9";
  document.getElementById("Info_Extras").textContent=txt;
  document.getElementById("Info_Extras").style.color = "brown";
}

function masInformacion(x) {
  var txt1= "Carga de novedades, partes diarios, control de ausentismo, entrega de uniformes, capacitación en relación a nuevos procesos o cambios de estructura, aplicación y seguimiento de sanciones.\
  Resolución y mediación de conflictos, asesoramiento en relación a vacaciones, liquidación de jornales, recibos de sueldo, feriados, días especiales, ART.\
  Iniciación y seguimiento del proceso de vacaciones, soporte en proceso de inducción, participación en proceso de conciliación gremial, organización de eventos masivos y días especiales,\
  decoración por días festivos.";
  var txt2= "Encargada de compras de materiales y herramientas para producción, asistencia en estrategias de ventas y análisis del mercado, carga de novedades, gestión de proveedores. \
  Corte y confección de diferentes tipos de accesorios como cintos, sobres, mochilas, riñoneras, etc";
  var txt3= "Cadetería, gestión de trámites, pagos, seguimiento de expedientes en tribunales, confección de documentos, envío de cartas documento.";
  if (x.id=='i_exp_li_a')
  {
    x.title=txt1
  }
  else {
    if (x.id=='i_exp_li_b')
    {
      x.title=txt2
    }
    else{
      x.title=txt3;
    }
  }
}

function img_animacion(x){
  document.getElementById("mujer_profesional").style.width="400px";
  x.style.height="400px";
  x.style.borderRadius="100px";
}

function img_normal(x){
  document.getElementById("mujer_profesional").style="325px";
}

function agrandarTexto(x){
  x.style.fontSize="20px";
  x.style.color ="brown";
}
function achicarTexto(x){
  x.style.fontSize="16px";
  x.style.color ="black";
}

function focus_aside(x){
  x.style.fontSize="23px";
}

function out_focus_aside(x){
  x.style.fontSize="15px";
}