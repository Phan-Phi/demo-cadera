import { useDebounce } from "react-use";
import { Input, InputProps } from "@mui/material";
import SearchOutlined from "components/Icon/SearchOutlined";

import { ChangeEvent, ChangeEventHandler, useCallback, useRef, useState } from "react";

interface SearchInputProps extends Omit<InputProps, "onChange"> {
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    value: string
  ) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { onChange, ...restProps } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const event = useRef<ChangeEvent<HTMLTextAreaElement | HTMLInputElement>>();

  useDebounce(
    () => {
      onChange && event.current && onChange(event.current, searchTerm);
    },
    500,
    [searchTerm, onChange]
  );

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =
    useCallback((e) => {
      event.current = e;
      setSearchTerm(e.target.value);
    }, []);

  return (
    <Input
      fullWidth
      placeholder="Tìm kiếm"
      endAdornment={<SearchOutlined />}
      onChange={onChangeHandler}
      {...restProps}
    />
  );
};

export default SearchInput;
