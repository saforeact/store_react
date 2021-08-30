import { useState } from "react";

const useInputFile = () => {
  const [value, setValue] = useState({
    path: "",
    file: null,
  });
  const onChange = (e) => {
    setValue({ path: e.target.value, file: e.target.files[0] });
  };
  return { value, onChange };
};
export default useInputFile;
