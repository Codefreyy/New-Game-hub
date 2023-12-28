import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms, { Platform } from "../hooks/usePlatforms"

type PlatformProps = {
  onSelectedPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformList = ({
  onSelectedPlatform,
  selectedPlatform,
}: PlatformProps) => {
  const { data: platforms, isLoading } = usePlatforms()
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        disabled={isLoading}
      >
        {selectedPlatform ? selectedPlatform.name : platforms?.results[0]?.name}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform, idx) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
            backgroundColor={
              selectedPlatform?.id == platform.id ||
              (selectedPlatform == null && idx == 0)
                ? "#2d2d2d"
                : ""
            }
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformList
