import {
  Card,
  Center,
  Container,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import ServiceFirstItemImg from "@shared/assets/service-item1.png";
import ServiceSecondItemImg from "@shared/assets/service-item2.png";
import ServiceThirdItemImg from "@shared/assets/service-item3.png";

export const OurServices = () => {
  return (
    <Container size={1280} p={0}>
      <Stack py="150px" px="56px">
        <Text c="#f79009" fz="13px" fw={400} lh="15.6px" ta="center">
          Xizmatlar
        </Text>
        <Text ta="center" c="#333" fz="28px" fw={500} lh="33.6px">
          Bizning xizmatlar
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
            Sizga yaqinlaringizning hikoyalarini hurmat qilish, eslash va baham
            ko'rishga yordam beradigan noyob xususiyatlarni kashf eting
          </Text>
        </Center>

        <Group grow>
          {servicesList?.map(({ image, text, title }, index) => (
            <Card key={index} padding="lg" w={350} radius="md">
              <Card.Section>
                <Image
                  src={image}
                  w={350}
                  radius="md"
                  alt="Services item image"
                />
              </Card.Section>
              <Text
                ta="center"
                pt="32px"
                pb="12px"
                fz="23px"
                fw={500}
                lh="27.6px"
              >
                {title}
              </Text>
              <Text ta="center" fz="16px" c="#4D5761" fw={400} lh="19.2px">
                {text}
              </Text>
            </Card>
          ))}
        </Group>
      </Stack>
    </Container>
  );
};

const servicesList = [
  {
    image: ServiceFirstItemImg,
    title: "QR kod profillari",
    text: "Avtobiografiyalar, fotosuratlar va videolar bilan batafsil profillar yarating",
  },
  {
    image: ServiceSecondItemImg,
    title: "Bardoshli QR kodlari",
    text: "Yillar davomida xizmat qiladigan ob-havoga chidamli QR kodlari",
  },
  {
    image: ServiceThirdItemImg,
    title: "Keyingi rejalar",
    text: "Raqamli qabriston va oila daraxti moduli tez orada",
  },
];
