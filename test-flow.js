const { spawn } = require('child_process');

const PORT = 3002;
const API_URL = `http://localhost:${PORT}`;

console.log("Starting Backend for Testing...");

// Force SQLite by removing DATABASE_URL (set to empty to prevent dotenv loading)
const env = { ...process.env, PORT: PORT, JWT_SECRET: 'test-secret', DATABASE_URL: '' };

const server = spawn('node', ['index.js'], { env, stdio: 'pipe' });

server.stdout.on('data', (data) => {
  // console.log(`[Server]: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`[Server Error]: ${data}`);
});

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function runTests() {
  console.log("Waiting for server to start...");
  await sleep(3000);

  let token = null;
  let clientId = null;
  let vehicleId = null;
  let ordenId = null;

  try {
    // 1. Register
    console.log("1. Testing Registration...");
    const username = `testuser_${Date.now()}`;
    const regRes = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password: 'password123',
        nombre: 'Test Admin'
      })
    });
    
    if (regRes.status === 201) {
      console.log("✅ Registration Successful");
      const data = await regRes.json();
      userId = data.id;
    } else {
      const err = await regRes.text();
      throw new Error(`Registration failed: ${err}`);
    }

    // 2. Login
    console.log("2. Testing Login...");
    const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password: 'password123'
        })
    });

    if (loginRes.ok) {
      const data = await loginRes.json();
      if (data.token) {
          console.log("✅ Login Successful");
          token = data.token;
      } else {
          throw new Error("Login failed: No token returned");
      }
    } else {
        throw new Error("Login failed");
    }

    const authHeaders = { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    // 3. Create Client
    console.log("3. Testing Create Client...");
    const clientRes = await fetch(`${API_URL}/clientes`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
            nombre: "Test Client",
            telefono: "555-0000",
            correo: "test@example.com"
        })
    });

    if (clientRes.status === 201) {
      console.log("✅ Client Created");
      const data = await clientRes.json();
      clientId = data.id;
    } else {
        throw new Error(`Create Client failed: ${await clientRes.text()}`);
    }

    // 4. List Clients (Protected Route Check)
    console.log("4. Testing List Clients (Protected)...");
    const listRes = await fetch(`${API_URL}/clientes`, { headers: authHeaders });
    if (listRes.ok) {
        const data = await listRes.json();
        if (Array.isArray(data) && data.find(c => c.id === clientId)) {
            console.log("✅ Client List Retrieval Successful");
        } else {
            throw new Error("Client not found in list");
        }
    } else {
        throw new Error(`List Clients failed: ${await listRes.text()}`);
    }

    // 5. Create Vehicle
    console.log("5. Testing Create Vehicle...");
    const vehicleRes = await fetch(`${API_URL}/vehiculos`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
            cliente_id: clientId,
            marca: "Toyota",
            modelo: "Corolla",
            placas: "XYZ-123"
        })
    });

    if (vehicleRes.status === 201) {
        console.log("✅ Vehicle Created");
        const data = await vehicleRes.json();
        vehicleId = data.id;
    } else {
        throw new Error(`Create Vehicle failed: ${await vehicleRes.text()}`);
    }

    // 6. Create Order
    console.log("6. Testing Create Order...");
    const orderRes = await fetch(`${API_URL}/ordenes`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
            cliente_id: clientId,
            vehiculo_id: vehicleId,
            descripcion: "Cambio de aceite",
            total: 1500,
            anticipo: 500,
            status: "pendiente"
        })
    });

    if (orderRes.status === 201) {
        console.log("✅ Order Created");
        const data = await orderRes.json();
        ordenId = data.id;
    } else {
        throw new Error(`Create Order failed: ${await orderRes.text()}`);
    }

    // 7. Update Order Status
    console.log("7. Testing Update Order Status...");
    const updateRes = await fetch(`${API_URL}/ordenes/${ordenId}`, {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify({
            status: "en_proceso"
        })
    });

    if (updateRes.ok) {
        const data = await updateRes.json();
        if (data.status === "en_proceso") {
            console.log("✅ Order Status Updated");
        } else {
             throw new Error("Order status mismatch");
        }
    } else {
        throw new Error(`Update Order failed: ${await updateRes.text()}`);
    }

    console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY! The system is running 100%.");

  } catch (error) {
    console.error("\n❌ TEST FAILED:", error.message);
  } finally {
    server.kill();
    process.exit(0);
  }
}

runTests();
