import { FC } from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components"

interface EmailProps {
  name: string
  email: string
  message: string
  category: string
  service: string
}

const Email: FC<EmailProps> = ({ name, email, message, category, service }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Hey there is a <strong>{category} order.</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello MR Dalaeli,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              The requested service is {service}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              You got an email from <strong>{name}</strong>. Their email is{" "}
              {email}. The message: <br />
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Email
