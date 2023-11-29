import './styles.css'
import { Logo } from "../Logo";
import { SelectCity } from "../SelectCity";
import Icon from '../../assets/svg/snow_night.svg'
import Background from '../../assets/img/bg_snow_night.png'

export function Today(){
    return (
        <section className="today">
            <form>
                <Logo />
                <SelectCity />
            </form>

            <div className="today-details" style={{ backgroundImage: `url(${Background})` }}>
                <header>
                    <h3>Jundiaí, SP</h3>
                    <p>Segunda-feira, 28 de novembro de 2023</p>
                </header>

                <footer>
                    <h1>28ºc</h1>
                    <img src={Icon} alt="Tempo" />
                </footer>

                <p>
                    32ºc / 26ºc <span>&#8226;</span>Poucas nuvens
                </p>
            </div>
        </section>
    )
}