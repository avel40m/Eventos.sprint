import './style.css';

export const Footer = () => {
  return (
    <footer>
        <div className="contenedor">
            <div className="redes-sociales">
                <a href="#"><i className="fa-brands fa-instagram rojo"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp verde"></i></a>
                <a href="#"><i className="fa-brands fa-facebook azul"></i></a>
            </div>
            <div className="autor">
                <p>Cohort</p>
            </div>
        </div>
    </footer>  )
}
