import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercentage>{percentage}%</StatisticsPercentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
