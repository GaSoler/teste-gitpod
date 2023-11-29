import './styles.css'

import { Today } from '../../components/Today';
import { Details } from '../../components/Details';
import { NextDays } from '../../components/NextDays';

export function Dashboard(){
    return (
        <div className='dashboard'>
            <Today />
            <Details />
            <NextDays />
        </div>
    )
}