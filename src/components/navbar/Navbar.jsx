import './navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="container">
            <div className="n-container">
                <div className="n-left">
                    <span>ACHACODE</span>
                </div>
                <div className="n-right">
                    <div className="n-menu">
                        <span>Accueil</span>
                        <span>Accueil</span>
                        <span>Accueil</span>
                        <span>Accueil</span>
                    </div>
                    <div className="n-btn">Get Funded</div>
                </div>
            </div>
        </div>

        <div className="nm-container">
            <span>ACHACODE</span>

            <BiMenuAltRight
                size={30}
            />

            <div className="nm-menu">
                <span>Accueil</span>
                <span>Accueil</span>
                <span>Accueil</span>
                <span>Accueil</span>
                <div className="nm-btn">Get Funded</div>
            </div>

        </div>
    </div>
  )
}

export default Navbar
