import { Box, Card, Center, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

export const Testimonials = () => {
  return (
    <Box>
      <Text ta="center" c="#f79009" fz="13px" fw={400} lh="15.6px">
        Fikrlar
      </Text>
      <Text ta="center" c="#333" fz="28px" fw={500} lh="33.6px">
        Mahsulotimiz haqida odamlar fikrlari
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
          Qanday qilib bizning yodgorliklarimiz ko'pchilikka tasalli va aloqa
          olib kelganini o'qing
        </Text>
      </Center>
      <Carousel
        align="center"
        // slideSize={260}
        slideGap="xl"
        loop
        dragFree
        withControls={false}
      >
        {comments?.map(({ comment, user }, index) => (
          <Carousel.Slide key={index}>
            <Card
              shadow="sm"
              component="a"
              radius="12px"
              bg="#FFFAEB"
              px="24px"
              py="20px"
              style={{ border: "1px solid" }}
            >
              <Text fw={400} fz="16px" lh="19.2px" c="#1F2A37">
                {comment}
              </Text>

              <Text mt="xs" ta="end" fw={500} fz="16px" lh="19.2px" c="#111927">
                {user}
              </Text>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

const comments = [
  {
    comment:
      "“Memorialink has helped us keep our grandfather's memory alive for future generations”",
    user: "Albert Flores",
  },
  {
    comment:
      "“Memorialink has helped us keep our grandfather's memory alive for future generations”",
    user: "Jerome Bell",
  },
  {
    comment:
      "“Memorialink has helped us keep our grandfather's memory alive for future generations”",
    user: "Kathryn Murphy",
  },
  {
    comment:
      "“Memorialink has helped us keep our grandfather's memory alive for future generations”",
    user: "Brooklyn Simmons",
  },
  {
    comment:
      "“Memorialink has helped us keep our grandfather's memory alive for future generations”",
    user: "Bessie Cooper",
  },
  {
    comment:
      "“Memorialink has helped us keep our grandfather's memory alive for future generations”",
    user: "John Doe",
  },
];
