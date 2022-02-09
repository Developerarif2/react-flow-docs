import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Box, Heading, Flex, Text, Button, Image } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import HeroFlow from '../components/HeroFlow';
import ExampleFlow from '../components/ExampleFlow';
import ExampleFlowA from '../components/ExampleFlow/A';
import ExampleFlowB from '../components/ExampleFlow/B';
import ExampleFlowC from '../components/ExampleFlow/C';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Box height={['80vh', null, null, 580]} position="relative">
        <HeroFlow />
      </Box>

      <Box bgColor="bgDark">
        <Box maxWidth="container.xl" mx="auto" px={3} py={8}>
          <Flex flexWrap="wrap" color="white" flexDirection={['column', null, null, 'row']}>
            <Flex alignItems="center" flex={1}>
              <Box flex={1}>
                <Text
                  mb={2}
                  fontSize={12}
                  fontWeight="bold"
                  color="gray.300"
                  textTransform="uppercase"
                >
                  Github Stars
                </Text>
                <Text mb={0} lineHeight="1" fontWeight="black" fontSize={40}>
                  9.1K
                </Text>
              </Box>
              <Box flex={1} mx={3} px={3}>
                <Text
                  mb={2}
                  fontSize={12}
                  fontWeight="bold"
                  color="gray.300"
                  textTransform="uppercase"
                >
                  NPM Downloads
                </Text>
                <Text mb={0} lineHeight="1" fontWeight="black" fontSize={40}>
                  2.6M
                </Text>
              </Box>
              <Box mx={3} px={3} flex={1}>
                <Text
                  mb={2}
                  fontSize={12}
                  fontWeight="bold"
                  color="gray.300"
                  textTransform="uppercase"
                >
                  License
                </Text>
                <Text mb={0} lineHeight="1" fontWeight="black" fontSize={40}>
                  MIT
                </Text>
              </Box>
            </Flex>

            <Box flex={1}>
              <Text fontWeight="bold">
                React Flow is a MIT-licensed open source library. You can help us to ensure the
                further development and maintanance by subscribing to one of our pro plans.
              </Text>
              <Button variant="link" as="a" href="/pro" _hover={{ color: 'white' }}>
                React Flow Pro <ArrowForwardIcon fontSize={19} ml={2} />
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>

      <ExampleFlow
        title="Feature-rich"
        text="React Flow comes with seamless zooming & panning, customizable node and edge types, single and multi-selection, several event handlers and more."
        Flow={ExampleFlowA}
        color="purple"
      />

      <ExampleFlow
        title="Nested Graphs"
        text="React Flow has built-in support for rendering sub graphs and nested nodes."
        Flow={ExampleFlowB}
        rtl
        color="yellow"
        dark
      />

      <ExampleFlow
        title="Additional Components"
        text="React Flow includes a MiniMap, Controls, Background and a FlowProvider you can use to access internal state outside the ReactFlow component."
        Flow={ExampleFlowC}
        color="red"
      />

      <Box bgColor="bgDark" px={3} py={24}>
        <Box textAlign="center" m="0 auto" maxWidth="container.md">
          <Heading mb={5} fontFamily="body" fontWeight="black" size="2xl" color="white">
            Showcase
          </Heading>
          <Heading mb={20} fontFamily="body" size="md" mx="auto" color="gray.300" fontWeight="bold">
            React Flow can be used for a wide range of applications: Music Synthesizers, Machine
            Learning Modeling, Conversational UIs.
          </Heading>
        </Box>
        <Flex flexWrap="wrap" justifyContent="space-between" maxWidth="container.xl" mx="auto">
          <Box width={['100%', null, null, '48%']}>
            <Box
              backgroundImage="url(/img/datablocks.png)"
              h={350}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="md"
              _hover={{ transform: 'scale(1.025)' }}
              cursor="pointer"
              transition="transform .2s"
            />
            <Heading mb={5} mt={6} fontFamily="body" fontWeight="black" size="lg" color="white">
              Datablocks
            </Heading>
            <Heading fontFamily="body" fontWeight="bold" size="md" mx="auto" color="gray.300">
              A node-based editor for exploring, analyzing and transforming data without code. React
              Flow was originally build for this project and later open sourced seperately.
            </Heading>
            <Button
              color="white"
              _hover={{ color: 'primary' }}
              as="a"
              href="https://datablocks.pro"
              target="_blank"
              variant="link"
            >
              Learn More <ArrowForwardIcon fontSize={19} ml={2} />
            </Button>
          </Box>
          <Box width={['100%', null, null, '48%']}>
            <Flex flexWrap="wrap" justifyContent="space-between">
              <Box mb={12} width="48%">
                <Box
                  backgroundImage="url(/img/datablocks.png)"
                  h={180}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  borderRadius="md"
                  _hover={{ transform: 'scale(1.025)' }}
                  cursor="pointer"
                  transition="transform .2s"
                />
                <Button
                  color="white"
                  mt={4}
                  as="a"
                  href="https://datablocks.pro"
                  target="_blank"
                  variant="link"
                  _hover={{ color: 'primary' }}
                >
                  bit.dev <ArrowForwardIcon fontSize={19} ml={2} />
                </Button>
              </Box>
              <Box mb={12} width="48%">
                <Box
                  backgroundImage="url(/img/datablocks.png)"
                  h={180}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  borderRadius="md"
                  _hover={{ transform: 'scale(1.025)' }}
                  cursor="pointer"
                  transition="transform .2s"
                />
                <Button
                  color="white"
                  mt={4}
                  as="a"
                  href="https://datablocks.pro"
                  target="_blank"
                  variant="link"
                  _hover={{ color: 'primary' }}
                >
                  getbasis.com <ArrowForwardIcon fontSize={19} ml={2} />
                </Button>
              </Box>
              <Box mb={12} width="48%">
                <Box
                  backgroundImage="url(/img/datablocks.png)"
                  h={180}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  borderRadius="md"
                  _hover={{ transform: 'scale(1.025)' }}
                  cursor="pointer"
                  transition="transform .2s"
                />
                <Button
                  color="white"
                  mt={4}
                  as="a"
                  href="https://datablocks.pro"
                  target="_blank"
                  variant="link"
                  _hover={{ color: 'primary' }}
                >
                  some-other-project.com <ArrowForwardIcon fontSize={19} ml={2} />
                </Button>
              </Box>
              <Box mb={9} width="48%">
                <Flex
                  border="1px dashed"
                  borderColor="gray.700"
                  h={180}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  borderRadius="md"
                  color="gray.300"
                  fontWeight="bold"
                  alignItems="center"
                  justifyContent="center"
                >
                  your project here
                </Flex>
                <Button
                  color="white"
                  _hover={{ color: 'primary' }}
                  mt={4}
                  as="a"
                  href="https://datablocks.pro"
                  target="_blank"
                  variant="link"
                >
                  contact us <ArrowForwardIcon fontSize={19} ml={2} />
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box px={3} py={24}>
        <Box textAlign="center" m="0 auto" maxWidth="container.md">
          <Heading mb={5} fontFamily="body" fontWeight="black" size="2xl">
            Trusted By Many
          </Heading>
          <Heading mb={20} fontFamily="body" size="md" mx="auto" color="gray.300" fontWeight="bold">
            React Flow is used by Startups, NGO's, Universities and large companies.
          </Heading>
        </Box>
      </Box>
    </Layout>
  );
}
