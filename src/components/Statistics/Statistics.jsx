import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentageGood }) => {
  return (
    <>
      <h2>Title</h2>
      <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
        <li>Total : {total}</li>
        <li>Positive Feedback : {percentageGood}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentageGood: PropTypes.number.isRequired,
};
