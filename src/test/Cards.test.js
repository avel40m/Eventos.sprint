import { render, screen, waitFor } from "@testing-library/react"
import { Cards } from "../components/Cards";
import "@testing-library/jest-dom";

describe("Funcionamiento del componente Cards", () => {
   
    test('El componente tiene el texto Cargando datos', async () => {
        render(<Cards />)
       expect(screen.queryByText(/Cargando datos.../i)).toBeInTheDocument();
    })
})