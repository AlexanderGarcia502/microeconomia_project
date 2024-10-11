import React from "react";

const TextField = ({
  onChange = () => {},
  className = "",
  messageError = "",
  labelText,
  ...props
}) => {
  return (
    <div className="col-span-12 sm:col-span-6">
      <label htmlFor="modal-form-1" className="form-label">
        {labelText}
      </label>
      <input
        id="modal-form-1"
        type="text"
        onChange={onChange}
        className={`form-control ${className}`}
        {...props}
      />

      {messageError.length > 1 ? (
        <div className="text-danger mt-2">{messageError}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextField;
