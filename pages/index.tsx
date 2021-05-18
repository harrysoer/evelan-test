import { useState } from 'react'
import { Box } from '@chakra-ui/layout'
import { Text, Heading, RadioGroup, Radio, Stack } from "@chakra-ui/react"

const mainTextColor = '#0E1236'
const subTextColor = '#424D79'
const selectedHouseColor = '#AB8A5D'

const options = [
  {
    value: 1,
    label: 'Finanzielles Ziel',
  },
  {
    value: 2,
    label: 'Ihre Herausforderung'
  },
  {
    value: 3,
    label: 'Ihr Kriterium'
  },
  {
    value: 4,
    label: 'Know-How'
  },
  {
    value: 5,
    label: 'Eigenkapital'
  },
  {
    value: 6,
    label: 'Contact Details'
  }
]

const houses = [
  {
    text: 'als Altersvorsorge'
  },
  {
    text: 'zur Absicherung meiner Kinder'
  },
  {
    text: 'als Maßnahme zum Vermögensaufbau'
  },
  {
    text: 'als Alternative zu anderen Spar-Produkten'
  }
]

export default function Home() {

  const [selectedHouse, setSelectedHouse] = useState(houses[0].text)
  const [selectedRadio, setSelectedRadio] = useState(options[0].value)

  const renderHouses = ({ text }) => (
    <Box
      key={text}
      _hover={{
        cursor: "pointer",
        backgroundColor: selectedHouseColor,
        color: "white",
        borderColor: selectedHouseColor,
      }}
      onClick={() => setSelectedHouse(text)}
      backgroundColor={selectedHouse === text ? selectedHouseColor : "white"}
      border={selectedHouse === text ? `2px solid ${selectedHouseColor}` : "2px solid #8B93B0"}
      color={selectedHouse === text ? "white" : subTextColor}
      alignItems="center"
      display="flex"
      boxShadow="2px 2px 8px rgba(0, 0, 0, 0.2)"
      borderRadius="3px"
      fontWeight="500"
      marginRight={{ base: "5px", lg: "29px" }}
      marginBottom={{ base: "20px", lg: "29px" }}
      padding="13px 16px"
      textAlign="center"
      justifyContent="center"
      height={{ base: "160px", lg: "196px" }}
      width={{ base: "160px", lg: "196px" }}
    >
      {text}
    </Box>
  )


  return (
    <Box display="flex" pt={{ base: "40px", lg: "40" }} px={{ base: "20px", lg: "28" }}>
      <Box
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        fontWeight="300"
        width="465px"
        pr="100px"
      >
        <RadioGroup
          defaultValue={options[0].value}
          value={selectedRadio}
          onChange={(newValue) =>
            setSelectedRadio(Number(newValue))
          }
        >
          <Stack>
            {options.map(
              ({ label, value }) => (
                <Radio
                  colorScheme="radioColor"
                  color={value === selectedRadio ? "#424D79" : "white"}
                  backgroundColor="white"
                  fontSize="16px"
                  name={value.toLocaleString()}
                  value={value}
                  key={value}
                >
                  {label}
                </Radio>
              ))}
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Heading
          color={mainTextColor}
          fontSize="40px"
          fontWeight="bold"
          my="unset"
          textTransform="uppercase"
        >
          Ich Interessiere mich für Immobilien als Kapitalanlage?
        </Heading>
        <Text
          fontWeight="300"
          color={mainTextColor}
          my="24px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          {houses.map(renderHouses)}
        </Box>
      </Box>
    </Box>
  )
}
