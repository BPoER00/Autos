const axios = require("axios");
const { expect } = require("chai");

const apiBaseUrl = "http://192.168.1.66:3000/api"; 
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDhkOWNiZTU4ZjIwYjQzMTFjYjJjMyIsInJvbCI6W3siX2lkIjoiNjUwOGQ5YzVkMTg2NmEwYzFhNDkyYWNmIiwibmFtZSI6InVzZXIiLCJzdGF0dXMiOnRydWV9LHsiX2lkIjoiNjUwOGQ5YzVkMTg2NmEwYzFhNDkyYWQwIiwibmFtZSI6Im1vZGVyYXRvciIsInN0YXR1cyI6dHJ1ZX0seyJfaWQiOiI2NTA4ZDljNWQxODY2YTBjMWE0OTJhZDEiLCJuYW1lIjoiYWRtaW4iLCJzdGF0dXMiOnRydWV9XSwiaWF0IjoxNjk2NzA5NTA0LCJleHAiOjE2OTY3OTU5MDR9.5bx5ZJeWS-uB8ufgAvuQ-NnCKoTXAV9UdSgaXFdwJ40"; 

const TIPO_PLACA = [
  {
    value: "P",
    name: "P",
  },
  {
    value: "A",
    name: "A",
  },
  {
    value: "C",
    name: "C",
  },
  {
    value: "U",
    name: "U",
  },
  {
    value: "M",
    name: "M",
  },
  {
    value: "TCR",
    name: "TCR",
  },
];

describe("Pruebas de carga de datos", function () {
  const totalRequests = 60;

  it(`Cargar ${totalRequests} autos`, async function () {
    for (let i = 0; i < totalRequests; i++) {
      const placa =
        Math.random().toString(36).substring(2, 5).toUpperCase() +
        Math.random().toString(10).substring(2, 5);

      const year = Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900;

      const price = Math.floor(Math.random() * 50000) + 1;

      const tipoPlaca =
        TIPO_PLACA[Math.floor(Math.random() * TIPO_PLACA.length)];

      const autoData = {
        tipoPlaca: tipoPlaca.value,
        marca: "6517a135b59075e9df260fba", 
        modelo: "Hilux", 
        placa,
        year,
        price,
      };

      try {
        const response = await axios.post(`${apiBaseUrl}/auto`, autoData, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": authToken,
          },
        });

        expect(response.status).to.equal(204); 
      } catch (error) {
        throw new Error(`Error en la solicitud ${i + 1}: ${error.message}`);
      }
    }
  });
});
