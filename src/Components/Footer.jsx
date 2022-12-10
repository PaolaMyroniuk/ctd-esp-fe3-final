
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer>
      <div className="boton">
        <button className="botonFooter"  onClick={scrollToTop}>Volver a la parte superior</button>
        {/* //La siguiente línea debe probar si la aplicación
        // está en modo oscuro y debe usar la clase navbar-dark bg-dark o navbar-light bg-light */}
        
                {/* //La siguiente línea debe probar si la aplicación
                // está en modo oscuro y debe usar el css correcto */}
                
      </div>
      <div className="iconos">
             
                <img className="logoFooter" src="/images/DH.png" alt="logo" />
                <ul>

                    <li> <img  src="/images/ico-facebook.png" alt="logo" /> </li>
                    <li> <img  src="/images/ico-instagram.png" alt="logo" /></li>
                    <li> <img  src="/images/ico-whatsapp.png" alt="logo" /> </li>
                    <li> <img  src="/images/ico-tiktok.png" alt="logo" /></li>
                </ul>
            </div>
            
    </footer >
  )
}

export default Footer