import ModelosProvider from "@/context/ModelosContext"
import ModelosAction from "./Modelos/ModelosAction"

function ModelosActions() {
  return (
    <ModelosProvider>
      <ModelosAction />
    </ModelosProvider>
  )
}

export default ModelosActions