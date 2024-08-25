import { Container, Group, Image, Stack, Text } from "@mantine/core";
import ourMissionImage from "@shared/assets/ourMission.png";
import ourViewImage from "@shared/assets/ourView.png";

export const Mission = () => {
  return (
    <Container size={1280} p={0}>
      {cards?.map(({ description, image, title }, index) => (
        <Group
          key={index}
          grow
          justify="space-between"
          px="67px"
          pt="150px"
          style={{
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <Stack>
            <Text c="#333" fz="28px" lh="33.6px" fw={500}>
              {title}
            </Text>
            <Text w="543px" c="#4D5761" fz="16px" lh="19.2px" fw={400}>
              {description}
            </Text>
          </Stack>
          <Image src={image} w={532} />
        </Group>
      ))}
    </Container>
  );
};

const cards = [
  {
    image: ourMissionImage,
    title: "Bizning vazifamiz",
    description:
      "Memorial veb-saytimizda biz aziz xotiralarni saqlash va yaqinlarimiz hayotini sharaflashga bag'ishlanganmiz. Samimiy hikoyalar va umumiy   tajribalar orqali biz ularning merosini hurmat va rahm-shafqat bilan  nishonlaydigan doimiy hurmat yaratishga intilamiz.",
  },
  {
    image: ourViewImage,
    title: "Bizning qarashimiz",
    description:
      "Memorial veb-saytimizda biz aziz xotiralarni saqlash va yaqinlarimiz hayotini sharaflashga bag'ishlanganmiz. Samimiy hikoyalar va umumiy   tajribalar orqali biz ularning merosini hurmat va rahm-shafqat bilan  nishonlaydigan doimiy hurmat yaratishga intilamiz.",
  },
];
