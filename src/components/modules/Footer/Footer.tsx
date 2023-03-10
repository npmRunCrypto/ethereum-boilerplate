import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/ethereum-boilerplate/ethereum-boilerplate/',
  forum: 'https://forum.moralis.io/',
  moralis: 'https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        🙋 You have questions? Ask them on the{' '}
        <Link href={links.forum} isExternal alignItems={'center'}>
          Moralis forum <ExternalLinkIcon />
        </Link>
      </Text>
      <Text>
        📖 Read more about{' '}
        <Link href={links.moralis} isExternal alignItems={'center'}>
          Moralis <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
