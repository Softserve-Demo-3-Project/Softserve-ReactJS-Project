import React from 'react';

class Input extends React.Component {
  render() {
    const {
      value,
      onChange,
      type,
      name,
      min,
      max,
      placeholder,
      $validation,
      $field
    } = this.props;

    {/* age input min & max*/}
    let range = {};
    if (type === "number") {
      range = {
        min,
        max
      };
    }

    return (
      <div className="form-group">
        <input
          value={value}
          {...$field(name, (e) => onChange(name, e.target.value)) }
          type={type}
          name={name}
          {...range}
          placeholder={placeholder}
          className="form-control"
        />
        {$validation[name].show && <span>{$validation[name].error.reason}</span>}
      </div>
    );
  }
}

export default Input;
