import { Box, Flex, Text, Link, HStack } from '@chakra-ui/react';

<Box border="1px" borderColor="#EBEBEB" borderRadius="5px" padding="2em">
<Flex alignItems="center" justifyContent="center">
  <HStack
    spacing="11px"
    display={{ lg: 'inline-block', sm: 'none' }}
    position="fixed"
    left="5em"
  >
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.77683 0.407736C6.93311 0.475575 7.02596 0.638322 7.00483 0.807374L6.43472 5.36819H11.6162C11.7651 5.36819 11.9006 5.45433 11.9637 5.58918C12.0269 5.72403 12.0064 5.88325 11.911 5.99765L5.67079 13.4859C5.56172 13.6168 5.37943 13.6601 5.22315 13.5923C5.06687 13.5244 4.97403 13.3617 4.99516 13.1926L5.56526 8.63183H0.383779C0.234868 8.63183 0.0993986 8.54569 0.036237 8.41084C-0.0269245 8.27598 -0.00637525 8.11677 0.0889554 8.00237L6.32919 0.514086C6.43826 0.383206 6.62055 0.339896 6.77683 0.407736ZM1.20315 7.86428H5.99999C6.11007 7.86428 6.21485 7.91155 6.2877 7.99407C6.36055 8.0766 6.39446 8.18643 6.3808 8.29566L5.91914 11.989L10.7968 6.13574H5.99999C5.88991 6.13574 5.78513 6.08847 5.71228 6.00594C5.63943 5.92342 5.60553 5.81359 5.61918 5.70436L6.08084 2.01105L1.20315 7.86428Z"
        fill="#8B8B8B"
      />
    </svg>
  </HStack>
  <Text color="#BEBEBE" textAlign="center">
    Only certain people can post in this channel.
    <Link
      color="#1264A3"
      href="#"
      textDecoration="underline"
      marginLeft="1ch"
    >
      Learn more
    </Link>
  </Text>
</Flex>
</Box>