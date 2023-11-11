import { add } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { FormStyle } from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    if (contacts.some(
        contact => 
        contact.number === number || 
        contact.name.toLowerCase() === name.toLowerCase())){
          alert(`${name} or entered ${number} number is already in contacts.`);
          return;
        }

    event.target.reset();
    dispatch(add({id: nanoid(), name, number}))
}; 

const isFormValid = event => event.target.checkValidity();

  return (
    <FormStyle onSubmit={handleSubmit}>
      <label className="label" htmlFor="name">
        <span className="input-title">Name</span>
        <input
          className="input"
          type="text"
          name="name"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          id='name'
        />
      </label>
      <label htmlFor="number">
        <span className="input-title">Number</span>
        <input
          className="input"
          type="tel"
          name="number"
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          id='number'
        />
      </label>
      <button
        className="btn btn-primary btn-block btn-large"
        type="submit"
        disabled={!isFormValid}
      >
        Add Contact
      </button>
    </FormStyle>
  );
};
