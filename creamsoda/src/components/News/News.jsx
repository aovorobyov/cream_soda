import './News.css'
import easter from '../../images/soda_easter.jpg';

export default function News() {

    return (
        <section className='showCase'>
            <div className='presentation'>
                <h1 className='name'>CREAM SODA</h1>
                <h2 className='description'>Сoffee | Breakfasts | Desserts</h2>
            </div>
            <div className='newsBlock'>
                <img className='photoNews' src={easter} alt="" />
                <div className='textNews'>
                    <h2 className='nameNews'>Пасха в Cream Soda</h2>
                    <p className='descNews'>Классический кулич на традиционном мягком тесте с сочным изюмом, вяленой клюквой и  воздушной шапкой из маршмеллоу и кулич малина-ваниль с розой на воздушном тесте с ванильным кремом, малиновым конфи и воздушной шапкой из маршмеллоу</p>
                </div>
            </div>
        </section>
    )
}