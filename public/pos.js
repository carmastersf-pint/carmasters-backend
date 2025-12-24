const API = "";
let cliente_id = null;
let vehiculo_id = null;

// SALDO
["total", "anticipo"].forEach(id => {
  document.getElementById(id).addEventListener("input", () => {
    const t = Number(total.value || 0);
    const a = Number(anticipo.value || 0);
    saldo.innerText = t - a;
  });
});

// CLIENTE
async function crearCliente() {
  const res = await fetch("/clientes", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      nombre: clienteNombre.value,
      telefono: clienteTelefono.value,
      correo: clienteCorreo.value
    })
  });
  const data = await res.json();
  cliente_id = data.id;
  clienteId.innerText = "ID: " + cliente_id;
}

// VEHÍCULO
async function crearVehiculo() {
  const res = await fetch("/vehiculos", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      cliente_id,
      marca: marca.value,
      modelo: modelo.value,
      placas: placas.value
    })
  });
  const data = await res.json();
  vehiculo_id = data.id;
  vehiculoId.innerText = "ID: " + vehiculo_id;
}

// ORDEN
async function crearOrden() {
  const res = await fetch("/ordenes", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      cliente_id,
      vehiculo_id,
      descripcion: descripcion.value,
      servicio: servicio.value,
      total: total.value,
      anticipo: anticipo.value
    })
  });

  const data = await res.json();
  ordenResultado.innerHTML = `
    ✅ Orden creada<br>
    <a href="/ordenes/${data.id}" target="_blank">Ver orden</a>
  `;
}

// AUTH
function authHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("token")
  };
}
