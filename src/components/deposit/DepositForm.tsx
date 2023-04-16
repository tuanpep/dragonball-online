import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function DepositForm() {
  return (
    <form>
      <FormControl>
        <FormLabel htmlFor="name">Tài khoản</FormLabel>
        <Input id="name" placeholder="Tên tài khoản" />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
