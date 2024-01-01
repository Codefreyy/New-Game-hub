import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../store"

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  // const searchText = useGameQueryStore((s) => s.gameQuery.searchText)
  // if (!searchText) {
  //   if (searchRef.current) {
  //     searchRef.current.value = ""
  //   }
  // }
  const setSearchText = useGameQueryStore((s) => s.setSearchText)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (searchRef.current) setSearchText(searchRef.current.value)
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          placeholder="Search Games"
          borderRadius={20}
          ref={searchRef}
          variant="filled"
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
