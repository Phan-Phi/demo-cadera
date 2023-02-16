import { useDebounce } from "react-use";

import {
  Input,
  styled,
  Select,
  StackProps,
  InputProps,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";

import SearchOutlined from "components/Icon/SearchOutlined";

import { useRef, useState, ChangeEvent, useCallback, ChangeEventHandler } from "react";

import Stack from "components/Stack";

type OmitKey = "value" | "onChange";

interface SearchInputWithSelectProps {
  InputProps?: Omit<InputProps, OmitKey>;
  SelectProps?: Omit<SelectProps, OmitKey>;
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    value: string
  ) => void;
  onChangeSelectValue: (e: SelectChangeEvent<unknown>) => void;
  renderItem: () => React.ReactNode;
  defaultSearchTerm?: any;
  defaultSelectedItem?: any;
}

const SearchInputWithSelect = (props: SearchInputWithSelectProps) => {
  const {
    onChange,
    onChangeSelectValue,
    renderItem,
    InputProps,
    SelectProps,
    defaultSearchTerm,
    defaultSelectedItem,
  } = props;

  const [isActive, setIsActive] = useState(false);

  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm || "");
  const [selectedItem, setSelectedItem] = useState<any>(defaultSelectedItem || "");

  const event = useRef<ChangeEvent<HTMLTextAreaElement | HTMLInputElement>>();

  useDebounce(
    () => {
      onChange && event.current && onChange(event.current, searchTerm);
    },
    500,
    [searchTerm, onChange]
  );

  const onSearchHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =
    useCallback((e) => {
      event.current = e;
      setSearchTerm(e.target.value);
    }, []);

  const onSelectHandler = useCallback((e: SelectChangeEvent<unknown>) => {
    setSelectedItem(e.target.value);
    onChangeSelectValue(e);
  }, []);

  const onFocusHandler = useCallback(() => {
    setIsActive(true);
  }, []);

  const onBlurHandler = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <StyledStack isActive={isActive} flexDirection="row" variant="centerCenter">
      <StyledInput
        fullWidth
        placeholder="Tìm kiếm"
        endAdornment={<SearchOutlined />}
        onChange={onSearchHandler}
        {...InputProps}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <StyledSelect
        MenuProps={{
          disableScrollLock: true,
        }}
        fullWidth={false}
        defaultValue={10}
        {...SelectProps}
        onOpen={onFocusHandler}
        onClose={onBlurHandler}
        isActive={isActive}
        onChange={onSelectHandler}
        value={selectedItem}
      >
        {renderItem()}
      </StyledSelect>
    </StyledStack>
  );
};

const StyledStack = styled(Stack, {
  shouldForwardProp: (propName) => {
    return propName !== "isActive";
  },
})<StackProps & { isActive: boolean }>(({ theme, isActive }) => {
  return {
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: isActive ? theme.palette.secondary.main : theme.palette.common.black,
    ["& .MuiSvgIcon-root"]: {
      color: isActive ? theme.palette.secondary.main : theme.palette.common.black,
    },
  };
});

const StyledInput = styled(Input)(() => {
  return {
    border: "unset",
    flexGrow: 1,
  };
});

const StyledSelect = styled(Select, {
  shouldForwardProp: (propName) => {
    return propName !== "isActive";
  },
})<{ isActive: boolean }>(({ theme, isActive }) => {
  return {
    border: "unset",
    borderLeftWidth: 2,
    borderLeftStyle: "solid",
    borderRadius: 0,
    borderLeftColor: isActive ? theme.palette.secondary.main : theme.palette.common.black,
    maxWidth: "25%",
    minWidth: "25%",
  };
});

export default SearchInputWithSelect;
