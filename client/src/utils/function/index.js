import { TextField } from "@material-ui/core";

export const showForm = (list, onChange) => {
  const returnForm = [];
  for (let key in list) {
    returnForm.push(
      <TextField
        required
        key={key}
        value={list[key]}
        onChange={(e) => {
          onChange((p) => ({ ...p, [key]: e.target.value }));
        }}
        placeholder={key}
      >
        {key}
      </TextField>
    );
  }
  return returnForm;
};
