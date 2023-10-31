import { render, screen } from "@testing-library/react"
import { Stast } from "../components/Stast"
import '@testing-library/jest-dom';

describe('Funcion del componente Stast', () => { 
    test('Saber si existe el texto cargando', () => { 
        render(<Stast />)
         expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
     })
    test('Saber si existe la clase loader', () => { 
        const { container } = render(<Stast />)
        expect(container.querySelector('.loader')).toBeInTheDocument();
     })
 })