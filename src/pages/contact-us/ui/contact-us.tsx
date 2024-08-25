import { Button, Container, Group, Image, Stack, Text, Textarea, TextInput } from "@mantine/core"
import AdressIcon from "@shared/assets/address.svg"
import PhoneIcon from "@shared/assets/phone.svg"
import EmailIcon from "@shared/assets/email.svg"

export const ContactUs = () => {
   return (
      <Container size={1280} p={0}>
         <Group grow justify="space-between">
            <Stack py="150px">
               <Text c="#f79009" fz="13px" fw={400} lh="15.6px">
                  Kontakt
               </Text>
               <Text c="#333" pb="24px" fz="28px" fw={500} lh="33.6px">
                  Biz bilan bog'lanish
               </Text>
               <Text
                  c="#4d5761"
                  fz="16px"
                  fw={400}
                  lh="19.2px"
                  w={410}
               >
                  Savollaringiz bo'lsa biz bilan bog'laning yoki ularni yozib qoldiring.
               </Text>
               <Stack>
                  <Stack pt="30px">
                     {contactUsDb?.map((item) => (
                        <Group py="12px">
                           <Image
                              src={item.icon}
                              w={28}
                              alt="Contact Us icons"
                           />
                           <Text>{item.text}</Text>
                        </Group>
                     ))}
                  </Stack>
               </Stack>
            </Stack>

            <Stack w="544px" gap="32px">
               <Group justify="space-between">
                  <TextInput
                     w="256px"
                     h="44px"
                     radius="8px"
                     label="Familiya"
                     placeholder="Familiyangizni kiriting"
                  />
                  <TextInput
                     w="256px"
                     h="44px"
                     radius="8px"
                     label="Ism"
                     placeholder="Ismingizni kiriting"
                  />
               </Group>
               <TextInput
                  radius="8px"
                  label="Telefon raqam"
                  placeholder="Telefon raqamingizni kiriting"
               />
               <Textarea
                  h="158px"
                  radius="8px"
                  rows={5}
                  label="Xabar"
                  placeholder="Shu yerga yozing"
               />
               <Button w="100%" h="44px">Sotib olish</Button>
            </Stack>
         </Group>
      </Container>
   )
}

const contactUsDb = [
   {
      icon: AdressIcon,
      text: "8502 Preston Rd. Inglewood, Maine 98380"
   },
   {
      icon: PhoneIcon,
      text: "(505) 555-0125"
   },
   {
      icon: EmailIcon,
      text: "alma.lawson@example.com"
   },
]