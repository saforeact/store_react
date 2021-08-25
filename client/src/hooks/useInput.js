import { useState } from "react";

const useInput = (startValue) => {
  const [value, setValue] = useState(startValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
export default useInput;
