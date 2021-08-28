import { TextField } from "@material-ui/core";

export const showForm = (list = {} || [], onChange) => {
  const onChangeHendler = (e) => {
    const changeList = [...list].map((i) =>
      i.name === e.target.name ? { ...i, value: e.target.value } : i
    );
    onChange(changeList, e);
  };

  if (list.length) {
    return list.map(({ name, value, ...item }) => (
      <TextField
        required
        name={name}
        key={name}
        value={value}
        onChange={onChangeHendler}
        placeholder={name[0].toUpperCase() + name.slice(1)}
        {...item}
      >
        {name}
      </TextField>
    ));
  } else {
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
          placeholder={key[0].ToUpperCase() + key.slice(1)}
        >
          {key}
        </TextField>
      );
    }
    return returnForm;
  }
};
