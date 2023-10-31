import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Form } from "../components/Form"

describe('Funcionamiento del componente Form', () => { 
    const categoria = ['MOVIES','RACE']
    const setFiltrar = jest.fn();
    test('Aparece el input placeholder con el texto Buscar por nombre', () => { 
        render(<MemoryRouter><Form setFiltrar={setFiltrar} /></MemoryRouter>)
         expect(screen.getByPlaceholderText(/Buscar por nombre/i)).toBeInTheDocument();
     })
    test('Aparece el boton Buscar', () => { 
        render(<MemoryRouter><Form setFiltrar={setFiltrar} /></MemoryRouter>)
         expect(screen.getByText(/Buscar/i)).toBeInTheDocument();
     })
    test('Aparecen los checkbox', () => { 
        render(<MemoryRouter><Form categorias={categoria} setFiltrar={setFiltrar} /></MemoryRouter>)
         expect(screen.getAllByRole('checkbox')).toHaveLength(categoria.length);
     })
 
 })