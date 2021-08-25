import { useState } from "react";

const useInputFile = () => {
  const [value, setValue] = useState({
    path: "",
    file: null,
  });
  const onChange = (e) => {
    console.log(`object`, e.target.files[0]);
    setValue({ path: e.target.value, file: e.target.files[0] });
  };
  return { value, onChange };
};
export default useInputFile;
