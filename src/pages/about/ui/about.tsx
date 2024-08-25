import { Button, Container, Group, Image, Stack, Text } from "@mantine/core";
import AboutContainerSVG from "@shared/assets/container.svg";

export const About = () => {
  return (
    <Container size={1280} p={0}>
      <Group grow justify="space-between" py="20px">
        <Stack>
          <Text c="#333" fz="40px" fw={500} lh="52px">
            Yaqinlar hayotini hurmat qilish: <br /> xotiralar va hikoyalar
            orqali abadiy hurmat
          </Text>
          <Text c="#333" fz="19px" lh="22.8px" fw={400}>
            Qadrli xotiralarni o'rganing, samimiy hikoyalar bilan o'rtoqlashing
            va qalblarimizni zabt etgan, abadiy sevgi merosini qoldirganlarning
            hayotini nishonlang
          </Text>
          <Group pt="24px">
            <Button variant="filled" h={44} w={155}>
              Hisob yaratish
            </Button>
            <Button variant="outline" h={44} w={155}>
              Ma'lumot olish
            </Button>
          </Group>
        </Stack>
        <Image src={AboutContainerSVG} w={600} />
      </Group>
    </Container>
  );
};
