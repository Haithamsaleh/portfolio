import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
const Nav = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      console.log('handleScroll called');
      if (window.pageYOffset > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
  return (
    <Box
    position="fixed"
    top="0"
    left="0"
    right="0"
    borderBottomWidth="1px"
    borderBottomColor={isTransparent ? 'white ' : 'Transparent'}
    bg={isTransparent ? 'white ' : 'Transparent'}
    transition="background-color 0.2s"
    zIndex="3"
  >
    <Flex
      h="60px"
      w="full"
      px={{ base: '4', md: '12' }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }}
        display={{ base: 'flex', md: 'none' }}>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('gray.800', 'white')}>
          Logo
        </Text>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}>
        <Button
          as={'a'}
          fontSize={'sm'}
          fontWeight={400}
          variant={'link'}
          href={'#'}>
          Sign In
        </Button>
        <Button
          as={'a'}
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'pink.400'}
          href={'#'}
          _hover={{
            bg: 'pink.300',
          }}>
          Sign Up
        </Button>
      </Stack>
    </Flex>

    <Collapse in={isOpen} animateOpacity>
      <MobileNav />
    </Collapse>
  </Box>
);
}

const DesktopNav = () => {
const linkColor = useColorModeValue('gray.600', 'gray.200');
const linkHoverColor = useColorModeValue('gray.800', 'white');
const popoverContentBgColor = useColorModeValue('white', 'gray.800');

return (
  <Stack direction={'row'} spacing={4}>
    {NAV_ITEMS.map((navItem) => (
      <Box key={navItem.label}>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href={navItem.href ?? '#'}
              fontSize={'sm'}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}>
              {navItem.label}
            </Link>
          </PopoverTrigger>

          {navItem.children && (
            <PopoverContent
              border={0}
              boxShadow={'xl'}
              bg={popoverContentBgColor}
              p={4}
              rounded={'xl'}
              minW={'sm'}>
              <Stack>
                {navItem.children.map((child) => (
                  <DesktopSubNav key={child.label} {...child} />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Box>
    ))}
  </Stack>
);
};

const DesktopSubNav = ({ label, href, subLabel }) => {
return (
  <Link
    href={href}
    role={'group'}
    display={'block'}
    p={2}
    rounded={'md'}
    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
    <Stack direction={'row'} align={'center'}>
      <Box>
        <Text
          transition={'all .3s ease'}
          _groupHover={{ color: 'pink.400' }}
          fontWeight={500}>
          {label}
        </Text>
        <Text fontSize={'sm'}>{subLabel}</Text>
      </Box>
      <Flex
        transition={'all .3s ease'}
        transform={'translateX(-10px)'}
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify={'flex-end'}
        align={'center'}
        flex={1}>
        <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Link>
);
};

const MobileNav = () => {
  const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      console.log('handleScroll called');
      if (window.pageYOffset > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
return (
  <Stack
  
  bg={isTransparent ? 'white ' : 'Transparent'}
    p={4}
    display={{ md: 'none' }}>
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
);
};

const MobileNavItem = ({ label, children, href }) => {
const { isOpen, onToggle } = useDisclosure();

return (
  <Stack spacing={4} onClick={children && onToggle}>
    <Flex
      py={2}
      as={Link}
      href={href ?? '#'}
      justify={'space-between'}
      align={'center'}
      _hover={{
        textDecoration: 'none',
      }}>
      <Text
        fontWeight={600}
        color={useColorModeValue('gray.600', 'gray.200')}>
        {label}
      </Text>
      {children && (
        <Icon
          as={ChevronDownIcon}
          transition={'all .25s ease-in-out'}
          transform={isOpen ? 'rotate(180deg)' : ''}
          w={6}
          h={6}
        />
      )}
    </Flex>

    <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
      <Stack
        mt={2}
        pl={4}
        borderLeft={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        align={'start'}>
        {children &&
          children.map((child) => (
            <Link key={child.label} py={2} href={child.href}>
              {child.label}
            </Link>
          ))}
      </Stack>
    </Collapse>
  </Stack>
);
};



const NAV_ITEMS = [
{
  label: 'Inspiration',
  children: [
    {
      label: 'Explore Design Work',
      subLabel: 'Trending Design to inspire you',
      href: '#',
    },
    {
      label: 'New & Noteworthy',
      subLabel: 'Up-and-coming Designers',
      href: '#',
    },
  ],
},
{
  label: 'Find Work',
  children: [
    {
      label: 'Job Board',
      subLabel: 'Find your dream design job',
      href: '#',
    },
    {
      label: 'Freelance Projects',
      subLabel: 'An exclusive list for contract work',
      href: '#',
    },
  ],
},
{
  label: 'Learn Design',
  href: '#',
},
{
  label: 'Hire Designers',
  href: '#',
},
];
export default Nav