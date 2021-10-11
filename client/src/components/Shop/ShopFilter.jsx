import { Box, Button, Input, MenuItem, Select } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import useStyles from "./ShopStyle";
import { Clear, Search } from "@material-ui/icons";
const ShopFilter = ({
  showSearch,
  searchInput,
  valueSearch,
  setValueSearchHendler,
  showSearchHendler,
  hideSearchHendler,
  selectCategory,
  setSelectCategoryHendler,
  category,
  selectBrand,
  setSelectBrandHendler,
  brands,
  clearFilters,
  loading,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.filters}>
      <Input
        className={classNames(
          classes.search,
          showSearch ? classes.searchActive : classes.searchDis
        )}
        inputProps={{ ref: searchInput }}
        placeholder="Search"
        value={valueSearch}
        onChange={setValueSearchHendler}
        endAdornment={
          showSearch ? null : <Search onMouseEnter={showSearchHendler} />
        }
        onBlur={hideSearchHendler}
        disabled={loading}
      />
      <Box className={classes.filters}>
        <Box className={classes.select}>
          <label>Filter by category</label>
          <Select
            value={selectCategory}
            onChange={setSelectCategoryHendler}
            disabled={loading}
          >
            <MenuItem value="None">None</MenuItem>
            {category.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box className={classes.select}>
          <label>Filter by brand</label>
          <Select
            value={selectBrand}
            onChange={setSelectBrandHendler}
            disabled={loading}
          >
            <MenuItem value="None">None</MenuItem>
            {brands.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Button onClick={clearFilters} size="small" disabled={loading}>
          Clear
          <Clear />
        </Button>
      </Box>
    </Box>
  );
};

export default ShopFilter;
