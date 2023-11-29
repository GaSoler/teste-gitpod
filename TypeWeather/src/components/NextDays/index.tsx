import './styles.css'
import { NextDaysItem, NextDaysItemProps } from "../NextDaysItem";
import Icon from '../../assets/svg/clear_night.svg'

// interface Props {
//     data: NextDaysItemProps;
// }

const item = {
    day: 'quarta-feira',
    icon: Icon,
    weather: 'Céu limpo',
    min: 26,
    max: 32
}

export function NextDays(){
    return (
        <section className="next-days">
            <h1>Previsão para 5 dias</h1>

            <div className="next-next-detail">
                <NextDaysItem data={item}  />
                <NextDaysItem data={item}  />
                <NextDaysItem data={item}  />
                <NextDaysItem data={item}  />
                <NextDaysItem data={item}  />
            </div>
        </section>
    )
}