import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
]

type SortSelectorProps = {
  setSelectedSortOrder: (sortOrder: string) => void
  selectedSortOrder: string
}

const SortSelector = ({
  selectedSortOrder,
  setSelectedSortOrder,
}: SortSelectorProps) => {
  const currentSortOrder = selectedSortOrder
    ? sortOrders.find((sort) => sort.value == selectedSortOrder)
    : sortOrders[0]

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentSortOrder ? currentSortOrder?.label : "Sort By"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, idx) => (
          <MenuItem
            key={order.value}
            onClick={() => setSelectedSortOrder(order.value)}
            backgroundColor={
              selectedSortOrder == order.value ||
              (selectedSortOrder == null && idx == 0)
                ? "#2d2d2d"
                : ""
            }
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
