import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Badge,
  Img,
} from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTelegram,
  FaBootstrap,

} from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'
import '../index.css'

export default function Header() {
  return (
    <>
      <Flex>
        <Container maxW="60ch">
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 30, md: '5rem' }}
            direction="column"
          >
            <Box w="36" marginX="auto">
              <Img
                borderRadius="full"
                src="https://i.ibb.co/jVXymmG/avatar.png"
              />
            </Box>
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.100')}
              paddingX="6"
              paddingY="3"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Heading
                fontWeight={400}
                fontSize={{ base: 20, md: 30 }}
                alignItems="center"
                lineHeight="110%"
                fontFamily="vazir"
                textAlign={"center"}
              >
               سلام سلام :) سجاد ضیائی هستم برنامه نویس موبایل و وب <span className="wave"> 👋</span>
              </Heading>
            </Box>
            <Box alignItems="center" textAlign={"center"}>
              <Text
                fontWeight={300}
                fontFamily="mono"
                fontSize={{ md: 'large' }}
                marginX="1"
                boxSizing="content-box"
              >
                <span className="highlighted-word">
                  دانشجو ارشد هوش مصنوعی
                </span>
                , <span className="highlighted-word">برنامه نویس فول استک</span>{' '}, 
                 <span className="highlighted-word">عاشق تکنولوژی</span>
              </Text>
            </Box>
            <Box justifyContent="center">
              <Badge
                as="a"
                variant="outline"
                marginBottom="5"
                fontSize="1.2rem"
                fontFamily="vazir"
              >
                استک
              </Badge>
              <Stack
                paddingX="14"
                justify="center"
                direction="row"
                wrap="wrap"
                fontSize="3.2rem"
                spacing="6"
              >
                <Link pointerEvents="none" isExternal>
                  <Icon as={FaPython} />
                </Link>
                <Link pointerEvents="none" isExternal>
                  <Icon as={SiFlutter} />
                </Link>
                <Link pointerEvents="none" as="span">
                  <Icon as={FaJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaHtml5} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaCss3} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaBootstrap} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaNodeJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaReact} />
                </Link>
              </Stack>
              <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
                fontFamily="vazir"
              >
                ارتباط با من
              </Badge>
              <Stack as={Box} marginY="5" spacing="5">
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://github.com/sajadziaee" isExternal>
                    <Icon as={FiGithub} /> @SajadZiaee
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="linkedin.com/in/sajad-ziaee-521b99bb" isExternal>
                    <Icon as={FiLinkedin} /> @SajadZiaee
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://t.me/sajadziaee" isExternal>
                    <Icon as={FaTelegram} /> @SajadZiaee
                  </Link>
                </Text>
              </Stack>
              <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
                fontFamily="vazir"
              >
               نمونه کار
              </Badge>
              <Stack as={Box} marginY="5" spacing="5">
                <Text fontSize="2xl" fontWeight="thin" fontFamily="vazir">
                  <Link href="https://cafebazaar.ir/app/com.appbesaz.ilamservice/" isExternal>
                    ایلام سرویس
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin" fontFamily="vazir">
                  <Link href="https://jsonplaceholder.sajadziaee.ir/" isExternal>
                  مینی پروژه پست‌ها
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin" fontFamily="vazir">
                  <Link href="https://sajadziaee.github.io/pair_images/" isExternal>
                    مینی پروژه جفت کردن تصاویر
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin" fontFamily="vazir">
                  <Link href="https://sajadziaee.github.io/weather_miniproject/" isExternal>
                   مینی پروژه آب و هوا 
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin" fontFamily="vazir">
                  <Link href="https://sajadziaee.github.io/flappy_bird/" isExternal>
                  مینی پروژه فلاپی برد
                  </Link>
                </Text>
              </Stack>
              <Text marginTop="6" fontFamily="vazir">
                ارتباط از طریق ایمیل <span>👉</span>{' '}
                <a className="mail" href="mailto:sajadziaee97@gmail.com">
                  sajadziaee97@gmail.com
                </a>
              </Text>
            </Box>
          </Stack>
        </Container>
      </Flex>
    </>
  )
}
