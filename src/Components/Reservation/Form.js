import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;

  .flex__parent_form {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .form__item {
    width: 100%;
    max-width: 48.4%;

    @media (max-width: 768px) {
      max-width: 100%;
    }

    input {
      width: 100%;
      margin-bottom: 20px;
      font-family: "Cabin", sans-serif;
      font-weight: 400;
      font-size: 1.5rem;
      padding: 10px 0;
      padding-left: 5px;
      border: 1px solid #cbc8c8;
      color: #4b4747;
      border-radius: 0;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      -webkit-appearance: none;
    }
  }

  .textarea__form {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    font-family: "Cabin", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 7px 0 0 5px;
    border: 1px solid #cbc8c8;
    color: #4b4747;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -webkit-appearance: none;
  }

  h6 {
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    margin: 20px 0px;
  }

  button[type="submit"] {
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    padding: 10px 20px;
    background-color: #4b4747;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Rest of your form submission code...
  };

  return (
    <FormWrapper>
      <form className="wrapper" onSubmit={handleSubmit}>
        <div className="flex__parent_form">
          <div className="form__item">
            <h6>Book a table</h6>
            <input type="text" name="name" placeholder="Your Name" required /> <br />
            <input type="tel" name="phoneNumber" placeholder="Phone number" required /><br />
            <input type="number" name="numberOfPersons" placeholder="No Of Persons" required />
          </div>

          <div className="form__item">
            <h6>Contact Details</h6>
            <input type="text" name="date" placeholder="Date" required /><br />
            <input type="text" name="time" placeholder="Time" required /><br />
            <input type="text" name="party" placeholder="Party" required />
          </div>
        </div>
        <textarea
          className="textarea__form"
          placeholder="Message"
          name="message"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
};

export default Form;
