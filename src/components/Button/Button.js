import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      Load more...
    </button>
  );
};

Button.protoType = {
  onClickBtn: PropTypes.func,
};

export default Button;
