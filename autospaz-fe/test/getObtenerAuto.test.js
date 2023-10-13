const axios = require("axios");
const { expect } = require("chai");

const apiBaseUrl = "http://192.168.1.66:3000/api"; 
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDhkOWNiZTU4ZjIwYjQzMTFjYjJjMyIsInJvbCI6W3siX2lkIjoiNjUwOGQ5YzVkMTg2NmEwYzFhNDkyYWNmIiwibmFtZSI6InVzZXIiLCJzdGF0dXMiOnRydWV9LHsiX2lkIjoiNjUwOGQ5YzVkMTg2NmEwYzFhNDkyYWQwIiwibmFtZSI6Im1vZGVyYXRvciIsInN0YXR1cyI6dHJ1ZX0seyJfaWQiOiI2NTA4ZDljNWQxODY2YTBjMWE0OTJhZDEiLCJuYW1lIjoiYWRtaW4iLCJzdGF0dXMiOnRydWV9XSwiaWF0IjoxNjk2NzA5NTA0LCJleHAiOjE2OTY3OTU5MDR9.5bx5ZJeWS-uB8ufgAvuQ-NnCKoTXAV9UdSgaXFdwJ40";

  describe("Pruebas de obtener de datos", function () {
    const totalRequests = 31;
  
    it(`Cargar ${totalRequests} autos`, async function () {
      for (let i = 0; i < totalRequests; i++) {
  
        try {
          const response = await axios.get(`${apiBaseUrl}/auto`, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": authToken,
            },
          });
  
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(`Error en la solicitud ${i + 1}: ${error.message}`);
        }
      }
    });
  });