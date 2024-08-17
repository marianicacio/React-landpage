import './styles.css'
import Logo from '../../imgs/Logo.svg'
import Arrow from '../../imgs/Arrow.svg'

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
                <nav>
                    <a href="">Link One</a>
                    <a href="">Link Two</a>
                    <a href="">Link Three</a>
                    <a href="">Link Four <button><img src={Arrow} alt="" /></button></a>
                </nav>
                <div className='button-get'>
                    <button>Try it for free</button>
                </div>
        </header>
    )
}