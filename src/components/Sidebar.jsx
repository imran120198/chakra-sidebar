import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  DrawerCloseButton,
} from "@chakra-ui/react";

import styles from "./Sidebar.module.css";
import React from "react";

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const nav = [
    {
      tag: "Home",
      img: "https://cdn-icons-png.flaticon.com/512/710/710055.png",
    },
    {
      tag: "Trending",
      img: "https://cdn-icons-png.flaticon.com/512/6469/6469474.png",
    },
    {
      tag: "Explore",
      img: "https://cdn-icons-png.flaticon.com/512/77/77521.png",
    },
    {
      tag: "Favourites",
      img: "https://cdn-icons-png.flaticon.com/512/16/16666.png",
    },
    {
      tag: "Settings",
      img: "https://cdn-icons-png.flaticon.com/512/126/126472.png",
    },
  ];

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <h1 className={styles.logo}>Logo</h1>
          <div className={styles.divmain}>
            {nav.map((item) => (
              <div className={styles.div1}>
                <img src={item.img} alt="" /> <p>{item.tag}</p>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
