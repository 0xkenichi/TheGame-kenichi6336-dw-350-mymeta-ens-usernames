import {
  Container,
  Box,
  Text,
  Link
} from "@chakra-ui/react"
import BackgroundImage from 'assets/landing/game-background.png'





function Game() {
  return (
    <Box
      width="100%"
      minHeight="1040px"
      backgroundImage={`url(${BackgroundImage})`}
      bgPosition="center"
      bgSize="cover"
    >

      <Container

        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth="100%"
        pl="137px"


      >

        <Text
          fontSize="38px"
          LineHeight="56px"
          fontWeight="normal"
          color="white"
          display="flex"
          flexDirection="column"
          maxWidth = "524px"

        >
          “Metagame is any approach to a game that transcends or operates outside of the prescribed rules of the game, uses external factors to affect the game, or goes beyond the supposed limits or environment set by the game.”

          <Text textAlign = "right">- From{' '} 
          <Link color='#79F8FB' href='#'
            as='u'
            fontSize="38px"
            LineHeight="56px"
            fontWeight="normal">
            The Wiki
          </Link>
        </Text>
        </Text>

   
      </Container>
    </Box>

  );
}

export default Game;