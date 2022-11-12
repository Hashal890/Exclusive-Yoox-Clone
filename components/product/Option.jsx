import { Box } from '@chakra-ui/react'
import React from 'react'

const Option = () => {
  return (
    <Box>
        <Menu>
         <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem >
      New Tab
    </MenuItem>
    <MenuItem>
      New Window
    </MenuItem>
    <MenuItem >
      Open Closed Tab
    </MenuItem>
    
  </MenuList>
</Menu>
    </Box>
  )
}

export default Option