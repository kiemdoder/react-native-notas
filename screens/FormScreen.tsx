import {
  Box,
  Checkbox,
  CheckIcon,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Radio,
  Select,
  Switch,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const FormScreen = () => {
  const [radioValue, setRadioValue] = useState("one");
  const [selectValue, setSelectValue] = useState("one");
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <VStack space={6} p={5}>
      <Checkbox value="test" accessibilityLabel="This is a dummy checkbox">
        Check box 1
      </Checkbox>
      <Checkbox
        value="test"
        accessibilityLabel="This is a dummy checkbox"
        defaultIsChecked
      >
        Check box 2 (checked by default)
      </Checkbox>

      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        value={radioValue}
        onChange={(nextValue) => {
          setRadioValue(nextValue);
        }}
      >
        <Radio value="one" my={1}>
          One
        </Radio>
        <Radio value="two" my={1}>
          Two
        </Radio>
      </Radio.Group>
      <Text>{radioValue}</Text>

      <Select
        selectedValue={selectValue}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setSelectValue(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
      </Select>
      <Text>{selectValue}</Text>

      <Box>
        <HStack alignItems="center" space={4}>
          <Text>Bluetooth</Text>
          <Switch size="sm" onValueChange={(v) => setSwitchValue(v)} />
        </HStack>
        <Text>{switchValue ? "on" : "off"}</Text>
      </Box>

      <InputGroup
        w={{
          base: "70%",
          md: "285",
        }}
      >
        <InputLeftAddon children={"https://"} />
        <Input
          w={{
            base: "70%",
            md: "100%",
          }}
          placeholder="nativebase"
        />
        <InputRightAddon children={".io"} />
      </InputGroup>
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Name"
        value={inputValue}
      />
    </VStack>
  );
};
