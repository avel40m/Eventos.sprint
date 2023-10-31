import {render,screen} from '@testing-library/react';
import { NotFound } from '../components/NotFound';
import '@testing-library/jest-dom';

describe('Funcionamiento del componente NotFound', () => { 
    test('Saber si el titulo contiene un 404', () => { 
        render(<NotFound/>);
         expect(screen.getByText('404')).toBeInTheDocument();
     })
    test('Saber si recibe props', () => { 
        render(<NotFound title={'Evento no encontrado'}/>);
         expect(screen.getByText('Evento no encontrado')).toBeInTheDocument();
     })
 })