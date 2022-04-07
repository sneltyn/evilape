import './SlugStatsItem.scss';

export default function SlugStatsItem ({amount, itemTitle, ethSign}) {
    return (
        <li className='slug-stats-item'>
            <span className='slug-stats-item__amount'>{amount}</span>
            <span className='stug-stats-item__title'>{itemTitle}</span>
        </li>
    )
}