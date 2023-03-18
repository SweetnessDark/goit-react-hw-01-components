import PropTypes from 'prop-types';
import scss from './Statistics.module.scss';

export const Statistics = ({ title, stats }) => {
    return (<section className={scss['statistics']}>
    <h2 className={scss['title']}>{title}</h2>
    <ul className={scss['list']}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li className={scss['item']} key={id}>
              <span className={scss['label']}>{label}</span>
              <span className={scss['percentage']}>{percentage}%</span>
            </li>
          );
        })}
    </ul>
  </section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
}