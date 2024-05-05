import './News.css'
// import easter from '../../images/soda_easter.jpg';
import SliderNews from '../SliderNews/SliderNews'

export default function News() {

    return (
        <section className='showCase'>
            <div className='presentation'>
                <h1 className='name'>CREAM SODA</h1>
                <h2 className='description'>Сoffee | Breakfasts | Desserts</h2>
            </div>
            <div className='newsBlock'>
                <SliderNews />
            </div>
        </section>
    )
}