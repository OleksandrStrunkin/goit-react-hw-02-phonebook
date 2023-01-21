import { Component } from "react";
import PropTypes from 'prop-types';
import './ContactForm.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleName = (e) => {
        this.setState({ name: e.currentTarget.value })
    };

    handleNumber = (e) => {
        this.setState({ number: e.currentTarget.value })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.name, this.state.number);

        this.setState({ name: '', number: ''})
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
          <label className="name">
            Ім'я
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleName}
            />
            </label>
            <label className="number">
              Номер
              <input
                type="tel"
                name="number"
                value={this.setState.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleNumber}
              />
           </label>
          <button type="submit" className="button">Зберегти</button>
        </form>
        )
    }   
}

export default ContactForm

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};