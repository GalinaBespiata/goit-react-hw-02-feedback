import PropTypes from 'prop-types';

export function RenderBtn({ options, onLeaveFeedback = () => {} }) {
  return (
    <>
      <h1 className="">Please leave feedBack</h1>
      <div>
        {options.map((option, idx) => {
          return (
            <button
              key={idx}
              name={option}
              className=""
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
}
RenderBtn.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
