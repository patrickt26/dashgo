import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Patrick Thomaz</Text>
        <Text color="gray.300" fontSize="small">
          plthomaz@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Patrick Thomaz" src="http://github.com/patrickt26.png" />
    </Flex>
  );
}