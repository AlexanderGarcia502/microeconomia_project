import { useState } from "react";
import { TomSelect } from "@/base-components";

const SelectField = ({
  labelText,
  placeholder = "",
  messageError = "",
  onChange = (value) => {},
  dataList = [{ value: "" }],
  ...props
}) => {
  const [select, setSelect] = useState(dataList[0].value);
  return (
    <div className="col-span-12 sm:col-span-6">
      <label>{labelText}</label>
      <div className="mt-2">
        <TomSelect
          value={select}
          onChange={(value) => {
            setSelect(value);
            onChange(value);
          }}
          options={{
            placeholder,
          }}
          className="w-full"
          {...props}
        >
          {dataList.map(({ value, index }) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </TomSelect>
      </div>
      {messageError.length > 1 ? (
        <div className="text-danger mt-2">{messageError}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectField;
