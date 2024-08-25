import { Box, Group, Stack, Text, Image } from "@mantine/core";
import instagramIcon from "@shared/assets/instagram.svg";
import telegramIcon from "@shared/assets/telegram.svg";
import twitterIcon from "@shared/assets/twitter.svg";
import youtubeIcon from "@shared/assets/youtube.svg";
import facebookIcon from "@shared/assets/facebook.svg";

export const Footer = () => {
  return (
    <Box w="100%" bg="#333" >
      <Stack>
        <Text pt="48px" fz="33px" fw={500} lh="39.6px" c="#fff" ta="center">
          Memorianlink
        </Text>
        <Group gap={24} ml="auto" mr="auto">
          {footerLinks?.map((item) => (
            <Text
              pt="40px"
              key={item}
              fz="16px"
              fw={400}
              lh="19.2px"
              c="#fff"
              style={{ cursor: "pointer" }}
            >
              {item}
            </Text>
          ))}
        </Group>
        <Group gap={40} ml="auto" mr="auto" pt="48px">
          {footerProgIcon?.map((item) => (
            <Image
              src={item.image}
              w={28}
              h={28}
              alt="Footer program icon image"
            />
          ))}
        </Group>
        <Text pt="40px" pb="30px" fz="16px" fw={400} lh="19.2px" c="#fff" ta="center">
          © 2024 Memorialink. Barcha huquqlar himoyalangan
        </Text>
      </Stack>
    </Box>
  );
};

const footerLinks = [
  "Bosh sahifa",
  "Biz haqimizda",
  "Xususiyatlar",
  "Qanday ishlaydi?",
  "Bog'lanish",
  "Xavfsizlik",
];

const footerProgIcon = [
  { image: instagramIcon },
  { image: telegramIcon },
  { image: twitterIcon },
  { image: youtubeIcon },
  { image: facebookIcon },
];
