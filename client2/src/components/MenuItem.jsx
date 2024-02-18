import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MenuItem = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="menu-item"
    >
      <Flex
        alignItems="start"
        justifyContent="start"
        py={4}
        pr={4}
        pl={2}
        gap="16px"
        minWidth="207px"
        bg="white"
        rounded="2xl"
        boxShadow="md"
      >
        <Box
          className="menu-item-image"
          h="136px"
          w="120px"
          rounded="lg"
          overflow="hidden"
          flex="0 0 auto"
        >
          <Image
            src="/rectangle-25-1@2x.png"
            alt="Menu Item"
            h="90px"
            w="100%"
            objectFit="cover"
          />
        </Box>
        <Flex flex="1" direction="column" gap="28px">
          <Text className="menu-item-title" fontWeight="medium">
            Cheese burgers
          </Text>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" gap="4px">
              <Text fontSize="lg" color="tint.10" fontWeight="medium">
                ₹
              </Text>
              <Text fontSize="xl" color="shade.1" fontWeight="medium">
                8.09
              </Text>
            </Flex>
            <Flex alignItems="center" gap="4px" color="tint.7">
              <Image src="/union.svg" alt="Rating" h="3" w="12.7px" />
              <Text fontSize="base" fontWeight="medium">
                4.2
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="end" justifyContent="end" gap="12px">
          <Box
            className="menu-item-favorite"
            h="12"
            w="12"
            rounded="3xl"
            border="1px"
            borderColor="tint.3"
            bg="white"
            boxShadow="sm"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: "tint.1" }}
          >
            <Image src="/heart.svg" alt="Favorite" h="6" w="6" />
          </Box>
          <Box
            className="menu-item-add-to-cart"
            h="12"
            w="12"
            rounded="3xl"
            bg="accent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="sm"
            _hover={{ bg: "accent-dark" }}
          >
            <Image src="/bag2.svg" alt="Add to Cart" h="6" w="6" />
          </Box>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default MenuItem;
