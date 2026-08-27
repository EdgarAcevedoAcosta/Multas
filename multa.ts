type EstadosPrestamo = "activo" | "vencido" | "devuelto";

interface Prestamo {
  ejemplar: number;
  multa: number;
  folio: string;
  socio: string;
  estado: EstadosPrestamo;
}

function calcularMulta(prestamo: Prestamo): number {
  const cargafijo = 50;
  return prestamo.multa + cargafijo;
}

function reciboDe(prestamo: Prestamo): string {
  if (prestamo.socio === undefined) {
    return "El socio no está definido.";
  }
  return `Recibo de $${prestamo.socio.toUpperCase()}`;
}

const prestamo: Prestamo = {
  multa: 350,
  ejemplar: 14,
  folio: "p-101",
  socio: "Ana Guitiérrez",
  estado: "vencido",
};
console.log(reciboDe(prestamo), "->", calcularMulta(prestamo));
