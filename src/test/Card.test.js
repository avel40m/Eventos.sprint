import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Card } from "../components/Card";

describe('Funcionamiento del componente Card', () => {
    
    test('Si aparece el loading Cargando', () => {
        render(<Card/>);
        expect(screen.getByText(/cargando/i)).toBeInTheDocument();
    })
  
})