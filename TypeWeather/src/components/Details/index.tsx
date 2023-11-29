import { WeatherItem } from '../WeatherItem'
import './styles.css'
import Icon from '../../assets/svg/thermometer_simple_light.svg'

export function Details(){
    return (
        <section className='weather-detail'>
            <h1>Detalhes do clima hoje</h1>
            
            <div className='weather-items'>
                <WeatherItem
                    icon={Icon}
                    title="Sensação térmica"
                    value={`26ºc`}
                />

                <WeatherItem
                    icon={Icon}
                    title="Sensação térmica"
                    value={`26ºc`}
                />

                <WeatherItem
                    icon={Icon}
                    title="Sensação térmica"
                    value={`26ºc`}
                />

                <WeatherItem
                    icon={Icon}
                    title="Sensação térmica"
                    value={`26ºc`}
                />

                <WeatherItem
                    icon={Icon}
                    title="Sensação térmica"
                    value={`26ºc`}
                />
            </div>
        </section>
    )
}