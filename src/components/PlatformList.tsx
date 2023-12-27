import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { Platform } from "../hooks/useGames"
import usePlatforms from "../hooks/usePlatforms"

type PlatformProps = {
  onSelectedPlatform: (platform: Platform) => void
  selectedPlatform: Platform
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
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
            background={selectedPlatform.id == platform.id ? "#2d2d2d" : ""}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformList
