function calcular() {
  const f = parseFloat(document.getElementById('funcionalidad').value);
  const u = parseFloat(document.getElementById('usabilidad').value);
  const m = parseFloat(document.getElementById('mantenibilidad').value);
  const e = parseFloat(document.getElementById('eficiencia').value);
  const s = parseFloat(document.getElementById('seguridad').value);

  if ([f, u, m, e, s].some(isNaN)) {
    alert("Por favor ingresa todos los valores.");
    return;
  }

  const promedio = ((f + u + m + e + s) / 5).toFixed(2);
  let mensaje = "";

  if (promedio >= 4.5) mensaje = "Excelente calidad de software. Cumple con los estándares más altos de eficiencia y seguridad.";
  else if (promedio >= 3.5) mensaje = "Buena calidad de software. Presenta un funcionamiento sólido con áreas de mejora menores.";
  else if (promedio >= 2.5) mensaje = "Calidad aceptable, aunque requiere ajustes en usabilidad o mantenimiento.";
  else mensaje = "Calidad deficiente. Se recomienda una revisión profunda del código y pruebas exhaustivas.";

  const resultado = document.getElementById('resultado');
  resultado.classList.remove('d-none', 'alert-success', 'alert-warning', 'alert-danger');
  
  if (promedio >= 4) resultado.classList.add('alert-success');
  else if (promedio >= 3) resultado.classList.add('alert-warning');
  else resultado.classList.add('alert-danger');

  resultado.innerHTML = `Calificación final: <b>${promedio}</b> / 5<br>${mensaje}`;
}
