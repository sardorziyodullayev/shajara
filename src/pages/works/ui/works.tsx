import {
  Card,
  Center,
  Container,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import WorksFirstItemImg from "@shared/assets/works-item1.png";
import WorksSecondItemImg from "@shared/assets/works-item2.png";
import WorksThirdItemImg from "@shared/assets/works-item3.png";

export const Works = () => {
  return (
    <Container size={1280} p={0}>
      <Stack py="50px" px="56px">
        <Text ta="center" c="#f79009" fz="13px" fw={400} lh="15.6px">
          Qanday ishlaydi?
        </Text>
        <Text ta="center" c="#333" fz="28px" fw={500} lh="33.6px">
          Qanday ishlaydi?
        </Text>
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
            Chiroyli yodgorlik yaratish uchun oddiy qadamlar: yaqinlaringizni
            osonlik bilan hurmat qilish bo'yicha qo'llanma
          </Text>
        </Center>

        <Group grow justify="space-between" align="start">
          {worksList?.map(({ image, itemNum, text, title }, index) => (
            <Card key={index} padding="lg" w={350}>
              <Card.Section>
                <Image src={image} w={350} alt="Works item image" />
                <Group align="start" gap={20}>
                  <Text flex={1} fz="57px" fw="500" lh="55px">
                    {itemNum}
                  </Text>
                  <Stack flex={3}>
                    <Text fz="23px" fw={500} lh="27.6px">
                      {title}
                    </Text>
                    <Text fz="16px" c="#4D5761" fw={400} lh="19.2px">
                      {text}
                    </Text>
                  </Stack>
                </Group>
              </Card.Section>
            </Card>
          ))}
        </Group>
      </Stack>
    </Container>
  );
};

const worksList = [
  {
    image: WorksFirstItemImg,
    itemNum: "01",
    title: "Ro'yxatdan o'ting",
    text: "Avtobiografiyalar, fotosuratlar va videolar bilan batafsil profillar yarating",
  },
  {
    image: WorksSecondItemImg,
    itemNum: "02",
    title: "Ma'lumotlarni to'ldiring",
    text: "Kerakli ma'lumotlarni to'ldiring",
  },
  {
    image: WorksThirdItemImg,
    itemNum: "03",
    title: "Qr kod uchun buyurtma bering",
    text: "Barcha ma'lumotlarni to'ldirib bo'lgacha QR kod buyurtma qiling",
  },
];
