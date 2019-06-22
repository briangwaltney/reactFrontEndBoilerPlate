import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";


//Builds general form component
//Does not create form alone. This is a collection
//of methods that are used to create form pieces.

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };
  //validates entire form
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    //console.log(errors);
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  //validates an individual piece of the form
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  //submits form, checks total form validation, calls submit function passed to form
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };
  //Updates state to reflect any changes to data or errors
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
  //creates button on form. Is disabled until total form is valid.
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  //creates Drop Down list. Must pass list of options as options prop
  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  //creates input box. Default type is text, but can be changed to any valid type.
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        component={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}
export default Form;
