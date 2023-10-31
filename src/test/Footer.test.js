import {screen,render} from '@testing-library/react';
import { Footer } from '../components/Footer';
import '@testing-library/jest-dom';

describe('Funcionamiento del componente Footer',() => {
    test('Saber si el componente cuenta con un texto Cohort', () => { 
        render(<Footer/>);
         expect(screen.getByText('Cohort')).toBeInTheDocument();
     })
     test('Existe la clase que llama al icono de whatsapp', () => { 
        const { container } = render(<Footer />);
        expect(container.querySelector('.fa-whatsapp')).toBeInTheDocument();
      })
     test('Existe la clase que llama al icono de instagram', () => { 
        const { container } = render(<Footer />);
        expect(container.querySelector('.fa-instagram')).toBeInTheDocument();
      })
     test('Existe la clase que llama al icono de facebook', () => { 
        const { container } = render(<Footer />);
        expect(container.querySelector('.fa-facebook')).toBeInTheDocument();
      })
})
