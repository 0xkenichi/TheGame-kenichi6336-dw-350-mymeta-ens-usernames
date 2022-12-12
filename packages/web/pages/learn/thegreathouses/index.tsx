import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  MetaTag,
  MetaTile,
  MetaTileBody,
  MetaTileHeader,
  Text,
  VStack,
} from '@metafam/ds';
import { PageContainer } from 'components/Container';
import { HeadComponent } from 'components/Seo';
import { SquareImage } from 'components/SquareImage';
import React from 'react';
import { descriptions } from 'utils/menuLinks';
import {
  Difficulty,
  QuestChainGreatHousesDetails,
  Time,
} from 'utils/questChains';

const TheGreatHousesPage: React.FC = () => (
  <PageContainer>
    <HeadComponent
      title="The Great Houses of MetaGame"
      description={descriptions.thegreathouses}
      url="https://my.metagame.wtf/thegreathouses"
    />
    <Heading mt={8} mb={8}>
      The Great Houses
    </Heading>
    <Text mb={8}>
      The Great Houses are curated learning resources sending you on a journey
      of discovery.
    </Text>
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr 1fr']}
      gap={{ base: 4, lg: 6, xl: 8 }}
      pb={24}
    >
      {Object.entries(QuestChainGreatHousesDetails).map(
        ([name, { title, description, image, difficulty, time }]) => (
          <Card
            key={title}
            {...{
              title,
              description,
              difficulty,
              time,
              link: `/learn/thegreathouses/${name}`,
              image,
              color: '#AB7C94',
            }}
          />
        ),
      )}
    </Grid>
  </PageContainer>
);

type CardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
  difficulty: string;
  time: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  image,
  difficulty,
  time,
}) => {
  let difficultyBgColor;
  switch (difficulty) {
    case Difficulty.HARD:
      difficultyBgColor = '#e53e3e87';
      break;
    case Difficulty.MEDIUM:
      difficultyBgColor = '#d69e2e8a';
      break;
    default:
      difficultyBgColor = '#38a16987';
  }

  let timeBgColor;
  switch (time) {
    case Time.LONG:
      timeBgColor = '#e53e3e87';
      break;
    case Time.MEDIUM:
      timeBgColor = '#d69e2e8a';
      break;
    default:
      timeBgColor = '#38a16987';
  }

  return (
    <Link role="group" _hover={{ textDecoration: 'none' }} href={link}>
      <MetaTile height="full" width="full">
        <MetaTileHeader>
          <SquareImage src={image} />
          <Flex px={3} w="full" pos="absolute" bottom={-6} zIndex={1}>
            <Heading
              size="lg"
              color="white"
              bgColor="rgba(255, 255, 255, 0.06)"
              style={{ backdropFilter: 'blur(10px)' }}
              lineHeight={1.8}
              justifyContent="center"
              px={3}
              width="full"
              textAlign="center"
              borderRadius={10}
              fontFamily="body"
              fontWeight={400}
            >
              {title}
            </Heading>
          </Flex>
        </MetaTileHeader>
        <MetaTileBody pos="relative" height="full">
          <Flex flexDir="column">
            <Text textStyle="caption">ABOUT</Text>

            <Text mb={2} h="3rem" fontSize="sm">
              {description}
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <VStack spacing={2} align="stretch">
              <Text textStyle="caption">Difficulty</Text>
              <Box>
                <MetaTag size="md" fontSize="sm" bgColor={difficultyBgColor}>
                  <Text>{difficulty}</Text>
                </MetaTag>
              </Box>
            </VStack>
            <VStack spacing={2} align="stretch">
              <Text textStyle="caption">Time</Text>
              <MetaTag size="md" fontSize="sm" bgColor={timeBgColor}>
                <Text>{time}</Text>
              </MetaTag>
            </VStack>
          </Flex>
        </MetaTileBody>
      </MetaTile>
    </Link>
  );
};

export default TheGreatHousesPage;