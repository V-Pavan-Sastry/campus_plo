import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Button
  } from '@chakra-ui/react'
import Sidenav from './sidenav'
const SideDrawer = ({isOpen,onClose}) => {
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
                <Sidenav/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideDrawer