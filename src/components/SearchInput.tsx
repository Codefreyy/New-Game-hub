import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

type SearchProps = {
  onSearch: (searchParam: string) => void
}

const SearchInput = ({ onSearch }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (searchRef.current) onSearch(searchRef.current.value)
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
