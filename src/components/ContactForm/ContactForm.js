import React, { Component } from 'react'

class ContactForm extends Component {
    state = {
        name:'',
        number:'',
      } 

      handelInput = e => {
        const {name, value} = e.currentTarget
        this.setState({[name]:value})
      }

      handleSubmit = e => {
        e.preventDefault()
        const contact = {
            name: this.state.name,
            number: this.state.number
        }
        this.props.addContact(contact);
        this.formReset();
      }

      formReset = () =>{
        this.setState({
          name:'',
          number: ''
        })
      };

    render() { 
        return (
          <>
            <form type="submit" onSubmit={this.handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  onChange={this.handelInput}
                  value={this.state.name}
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </label>
              <label>
                Number
                <input
                  type="tel"
                  onChange={this.handelInput}
                  value={this.state.number}
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </label>
              <button type="submit">Add contact</button>
            </form>
          </>
        );
    }
}
 
export default ContactForm;