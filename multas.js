function calcularMulta(prestamo) {
  const cargafijo = 50;
  return prestamo.multa + cargafijo;
}
const prestamo1 = { multa: "350", ejemplar: 14 };
console.log(calcularMulta(prestamo1));
