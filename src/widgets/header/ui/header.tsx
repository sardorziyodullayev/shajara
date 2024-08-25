import { Button, Container, Group, Text } from "@mantine/core";

export const Header = () => {
  return (
    <Container size={1280} p={0}>
      <Group justify="space-between">
        <Text fz="23px" fw={500} lh="27.6px">
          Memorialink
        </Text>
        <Group gap={24}>
          {navLinks?.map((item) => (
            <Text
              key={item}
              fz="19px"
              fw={400}
              lh="22.8px"
              c="#4D5761"
              style={{ cursor: "pointer" }}
            >
              {item}
            </Text>
          ))}
        </Group>
        <Button variant="default" h={44} w={155}>
          Hisob yaratish
        </Button>
      </Group>
    </Container>
  );
};

const navLinks = [
  "Biz haqimizda",
  "Xususiyatlar",
  "Qanday ishlaydi?",
  "Bog'lanish",
];
