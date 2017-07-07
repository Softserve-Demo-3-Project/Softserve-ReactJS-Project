import React from 'react';

class Input extends React.Component {
  render() {
    const {
      value,
      onChange,
      type,
      name,
      placeholder,
      $validation,
      $field
    } = this.props;

    return (
      <div className="form-group">
        <input
          value={value}
          {...$field(name, (e) => onChange(name, e.target.value)) }
          type={type}
          name={name}
          placeholder={placeholder}
          className="form-control"
        />
        {$validation[name].show && <span>{$validation[name].error.reason}</span>}
      </div>
    );
  }
}

export default Input;
