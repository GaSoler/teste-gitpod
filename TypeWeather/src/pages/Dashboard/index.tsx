import './styles.css'

import { Today } from '../../components/Today';

export function Dashboard(){
    return (
        <div className='dashboard'>
            <Today />
        </div>
    )
}