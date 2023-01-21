import PropTypes from 'prop-types';
import './Filter.css'
const Filter = ({ value, onChange }) => {
     return (
         <label className='filter'>
            Пошук
            <input type="text" value={value} onChange={onChange} />
          </label>
     )
}

export default Filter

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};