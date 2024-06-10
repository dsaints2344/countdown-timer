import { Box, Center, Text } from "@chakra-ui/react"
import Layout from "./components/Layout"
import Timer from "./components/timer/Timer"

const App = () => {
  return (
    <>
      <Layout>
        <Box alignItems="center">
          <Text fontSize="3xl"
            align="center"
            letterSpacing="16px"
            fontFamily="'Red Hat Text', sans-serif"
            color="neutral.white"
            fontWeight="700">
            WE'RE LAUCHING SOON
          </Text>
          <Center m="10%">
            <Timer />
          </Center>
        </Box>
      </Layout>
    </>
  )
}

export default App
