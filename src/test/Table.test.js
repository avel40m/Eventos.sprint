import { render, screen } from "@testing-library/react"
import { Table } from "../components/Table"
import "@testing-library/jest-dom";


describe('Funcionamiento del componente Table', () => { 
    const dataTable = {
        titulo: "Titulo",
        filas: ['Encabezados 1','Encabezados 2','Encabezados 3']
    }
    test('Verificar el titulo de la tabla', () => { 
        render(<Table dataTable={dataTable} />)
        expect(screen.getByText(dataTable.titulo)).toBeInTheDocument();
     })
    test('Verificar los subtitulos de la tabla', () => { 
        render(<Table dataTable={dataTable} />)
        dataTable.filas.forEach(filas => {
            expect(screen.getByText(filas)).toBeInTheDocument();
        })
     })
 })