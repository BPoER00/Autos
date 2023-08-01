import CardComponentsAll from "./CardComponentsAll";
import CardTableAutos from "./CardTableAutos";
function page() {
  return (
    <CardComponentsAll>
      <div class="flex flex-wrap -mx-4">
        <CardTableAutos
          marca={"Toyoca"}
          modelo={"Hilux"}
          placa={"A123ABC"}
          year={2022}
        />
        <CardTableAutos
          marca={"Toyoca"}
          modelo={"Hilux"}
          placa={"A123ABC"}
          year={2022}
        />
        <CardTableAutos
          marca={"Toyoca"}
          modelo={"Hilux"}
          placa={"A123ABC"}
          year={2022}
        />
        <CardTableAutos
          marca={"Toyoca"}
          modelo={"Hilux"}
          placa={"A123ABC"}
          year={2022}
        />
        <CardTableAutos
          marca={"Toyoca"}
          modelo={"Hilux"}
          placa={"A123ABC"}
          year={2022}
        />
        <CardTableAutos
          marca={"Toyoca"}
          modelo={"Hilux"}
          placa={"A123ABC"}
          year={2022}
        />
      </div>
    </CardComponentsAll>
  );
}

export default page;
