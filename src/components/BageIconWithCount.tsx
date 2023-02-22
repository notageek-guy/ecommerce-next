import { Box, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

const BadgeIconWithCount = ({
  count = 0,
  icon,
  onClick,
  btnRef,
}: {
  count: number;
  icon: IconType;
  onClick?: () => void;
  btnRef?: any;
}) => {
  return (
    <Box
      position="relative"
      _hover={{
        cursor: "pointer",
      }}
      onClick={onClick}
      ref={btnRef}
    >
      <Icon
        as={icon}
        _hover={{
          color: "red.500",
        }}
        _active={{
          color: "red.500",
        }}
        w="full"
        h="full"
        size={28}
      />
      <Box
        position="absolute"
        top={-1}
        right={-1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        transform="translate(50%,-50%)"
        w={5}
        h={5}
        rounded="full"
        bg="red.500"
        color="white"
        fontSize="xs"
      >
        {count}
      </Box>
    </Box>
  );
};

export default BadgeIconWithCount;
