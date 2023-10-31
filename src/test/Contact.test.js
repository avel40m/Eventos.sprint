import { render, screen } from "@testing-library/react";
import { Contact } from "../components/Contact";
import "@testing-library/jest-dom";

describe("Funcionamiento del componente Contact", () => {
   test('Saber si existe la label nombre en el componente', () => {
      render(<Contact />)
      const nombreLabel = screen.getByLabelText("Nombre:");
      expect(nombreLabel).toBeInTheDocument();
   })
   test('Saber si existe la label Correo electronico en el componente', () => {
      render(<Contact />)
      const nombreLabel = screen.getByLabelText("Correo electronico:");
      expect(nombreLabel).toBeInTheDocument();
   })
   test('Saber si existe la label Mensaje en el componente', () => {
      render(<Contact />)
      const nombreLabel = screen.getByLabelText("Mensaje:");
      expect(nombreLabel).toBeInTheDocument();
   })
   test('Saber si está el botón para enviar el formulario', () => {
      const { container } = render(<Contact />)
      const element = container.querySelector(`input[type='submit']`);
      expect(element).toBeInTheDocument();
      expect(element).toHaveValue('Enviar');
   })
});