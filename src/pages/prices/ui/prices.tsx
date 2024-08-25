import { Box, Center, Container, Group, Stack, Text } from "@mantine/core";

export const Prices = () => {
  return (
    <Container size={1280} p={0}>
      <Box>
        <Stack py="50px" mt="50px" px="72px">
          <Center>
            <Text c="#f79009" fz="13px" fw={400} lh="15.6px">
              Narxlar
            </Text>
          </Center>
          <Center>
            <Text c="#333" fz="28px" fw={500} lh="33.6px">
              Narxlar bilan tanishing
            </Text>
          </Center>
          <Center>
            <Text
              ta="center"
              c="#4d5761"
              fz="16px"
              fw={400}
              lh="19.2px"
              w={501}
              py="24px"
            >
              Xotiralarni saqlash uchun arzon rejalar: yaqinlaringizni hurmat
              qilishning eng zo'r variantini toping
            </Text>
          </Center>

          <Group></Group>
        </Stack>
      </Box>
    </Container>
  );
};

const priceList = [{ plantext: "Asosiy reja", price: "150,000 so'm" }];
