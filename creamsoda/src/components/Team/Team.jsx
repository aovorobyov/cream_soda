import SliderInvite from '../SliderInvite/SliderInvite'

import './Team.css'

export default function () {
    return (
        <>
            <div className="teamInvite">
                <h1 className="teamInviteHeader">Стать частью команды Cream Soda</h1>
                <div className="teamInviteBlocks">
                    <SliderInvite />
                    <div className='teamInviteTextAndButton'>
                        <p className='teamInviteText'>
                        Привет! Мы рады предложить тебе возможность присоединиться к нашей уникальной и дружной команде! Наша кофейня ищет таланты на различные должности. Мы предлагаем не только гибкий график и почасовую оплату труда, но и ряд привлекательных бонусов: бесплатное питание, фирменный мерч и корпоративные мероприятия, которые помогут лучше узнать коллег и почувствовать себя частью нашей большой семьи.<br/><br/>
                        Мы гордимся нашим теплым и поддерживающим коллективом, который стремится сделать каждый день особенным как для сотрудников, так и для наших гостей. Если ты заинтересован в работе в инновационной и динамичной среде, где каждый вносит вклад в общее дело, мы ждём твою анкету!
                        </p>
                        <a href='https://forms.yandex.ru/u/655da818e010db02118f5ed6/?fbclid=PAZXh0bgNhZW0CMTEAAaZh8u81r1ur7K8VpJRlxmYz4T46Ez-d5KnClAPlmZLe_gDqSJFWpj_VbJ4_aem_AXFWMuvMcij6I1oPRNrn-hFQl7g1fn_O6dmbeiQdfY68TA4P6YC2enCMbYZU8O4CQJhHuYpiEKARLVtkmmrgBn_4'>
                            <button className='teamInviteButton'>Заполнить анкету</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}