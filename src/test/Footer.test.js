import {screen,render} from '@testing-library/react';
import { Footer } from '../components/Footer';
import '@testing-library/jest-dom';

describe('Funcionamiento del componente Footer',() => {
    test('Saber si el componente cuenta con un texto Cohort', () => { 
        render(<Footer/>);
         expect(screen.getByText('Cohort')).toBeInTheDocument();
     })
})
