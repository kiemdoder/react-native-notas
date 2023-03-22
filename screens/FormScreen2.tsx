import { FormControl, Input, VStack, WarningOutlineIcon } from "native-base";

export const FormScreen2 = () => {
  return (
    <VStack space={6} p={5}>
      <FormControl mb="5">
        <FormControl.Label>Project Title</FormControl.Label>
        <Input />
        <FormControl.HelperText>
          Give your project a title.
        </FormControl.HelperText>
      </FormControl>

      <FormControl isInvalid>
        <FormControl.Label>Project Title</FormControl.Label>
        <Input placeholder="Title" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Something is wrong.
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
};
