import app from "./app";
import "./database";

//agregamos el puerto;
app.listen(app.get("port"));

//mostramos compilacion
console.log(`server on port: ${app.get("port")}`);
