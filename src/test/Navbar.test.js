import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../components/Navbar/Navbar"
import '@testing-library/jest-dom'
import { MemoryRouter } from "react-router-dom"


describe('Funcionamiento del componente Navbar', () => { 
    test('Saber si tiene el titulo LOGO el menu', () => { 
        render(<MemoryRouter><Navbar/></MemoryRouter>)
        expect(screen.getByText("LOGO")).toBeInTheDocument();
     })
    test('Ver si tiene cinco lista de navegación', () => { 
       render(<MemoryRouter><Navbar/></MemoryRouter>);
        expect(screen.getAllByRole("listitem")).toHaveLength(5);
     })
     test('Ver si los item de la navegación están bien ubicados', () => { 
        render(<MemoryRouter><Navbar/></MemoryRouter>)
        const [primerItem,segundoItem,tercerItem,cuartoItem,quintoItem]
         = screen.getAllByRole("listitem");
        expect(primerItem).toHaveTextContent(/INICIO/i);
        expect(segundoItem).toHaveTextContent(/PROXIMOS EVENTOS/i);
        expect(tercerItem).toHaveTextContent(/EVENTOS ANTERIORES/i);
        expect(cuartoItem).toHaveTextContent(/CONTACTOS/i);
        expect(quintoItem).toHaveTextContent(/ESTADISTICAS/i);
      })
      test('Ver si existe el title abrir', () => { 
         render(<MemoryRouter><Navbar/></MemoryRouter>)
         expect(screen.getByTitle('abrir')).toBeInTheDocument();
       })
      test('Ver si existe el title cerrar', () => { 
         render(<MemoryRouter><Navbar/></MemoryRouter>)
         expect(screen.getByTitle('cerrar')).toBeInTheDocument();
       })
      test('Abrir el menu cuando es pagina responsiva', () => { 
         render(<MemoryRouter><Navbar/></MemoryRouter>)
         const abrirMenu = screen.getByTitle('abrir');
         const navbar = screen.getByRole('menuNavegacion');

         fireEvent.click(abrirMenu);
         expect(navbar).toHaveClass('visible');
       })
      test('Cerrar el menu cuando es pagina responsiva', () => { 
         render(<MemoryRouter><Navbar/></MemoryRouter>)
         const cerrarMenu = screen.getByTitle('cerrar');
         const navbar = screen.getByRole('menuNavegacion');

         fireEvent.click(cerrarMenu);
         expect(navbar).not.toHaveClass('visible')
       })

 })