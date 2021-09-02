import { Box, Button, Input, TextField } from "@material-ui/core";
import useStyles from "./ShowNewFieldsStyle";
import { Delete } from "@material-ui/icons";
const ShowNewFields = ({ list, onChange }) => {
  const classes = useStyles();
  const createNewProperty = (e, item) => {
    if (e.keyCode === 13) {
      onChange(
        [...list].map((listItem) =>
          listItem.name === item.name
            ? {
                ...listItem,
                specifications: {
                  ...listItem.specifications,
                  [e.target.value]: "",
                },
              }
            : listItem
        )
      );
    }
  };

  const onChangeHendler = (e, key, name) => {
    onChange(
      list.map((listItem) =>
        listItem.name === name
          ? {
              ...listItem,
              specifications: {
                ...listItem.specifications,
                [key]: e.target.value,
              },
            }
          : listItem
      )
    );
  };

  const showSpecifications = (item) => {
    const res = [];
    for (const key in item.specifications) {
      const field = (
        <Input
          placeholder={key}
          value={item.specifications[key]}
          onChange={(e) => onChangeHendler(e, key, item.name)}
          key={key}
          endAdornment={
            <Button>
              <Delete onClick={() => deleteSpecifications(item.name, key)} />
            </Button>
          }
        />
      );
      res.push(field);
    }
    return res;
  };
  const deleteTitle = (name) => {
    onChange([...list].filter((item) => item.name !== name));
  };
  const deleteSpecifications = (nameField, nameGroup) => {
    onChange(
      [...list].map((groupItem) => {
        if (groupItem.name === nameField) {
          delete groupItem.specifications[nameGroup];
        }
        return groupItem;
      })
    );
  };
  return (
    <Box className={classes.wrapper}>
      {[...list].map((item) => (
        <Box key={item.name}>
          <Box className={classes.title}>
            <h3>{item.name}</h3>
            <Button onClick={() => deleteTitle(item.name)}>
              <Delete />
            </Button>
          </Box>
          <Box className={classes.specList}>
            {item.specifications && showSpecifications(item)}
          </Box>
          <TextField
            className={classes.field}
            placeholder="Create New Field"
            onKeyDown={(e) => createNewProperty(e, item)}
          />
        </Box>
      ))}
    </Box>
  );
};
export default ShowNewFields;
