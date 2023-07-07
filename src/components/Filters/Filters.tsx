'use client'
import styles from './Filters.module.scss'
import React, { useState } from 'react'
import 'material-icons/iconfont/material-icons.css'
import { Dropdown } from '../../inputs/Dropdown/Dropdown'
import { DevTypeButton } from './Buttons/DevTypeButton/DevTypeButton'

const Filters = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<string[]>([])
  const [selectedSeniority, setSelectedSeniority] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState<string[]>([])

  const handleSelect = (option: string, buttonType: string) => {
    let updatedOptions: string[]

    const updateSelectedOptions = (
      selectedOptions: string[],
      setter: (value: string[]) => void,
    ) => {
      updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option]
      setter(updatedOptions)
    }

    switch (buttonType) {
      case 'Technology':
        updateSelectedOptions(selectedTechnology, setSelectedTechnology)
        break

      case 'Seniority':
        updateSelectedOptions(selectedSeniority, setSelectedSeniority)
        break

      case 'Availability':
        updateSelectedOptions(selectedAvailability, setSelectedAvailability)
        break

      case 'Location':
        updateSelectedOptions(selectedLocation, setSelectedLocation)
        break

      default:
        break
    }
  }

  const technologyList = [
    'Javascript',
    'Python',
    'Node.js',
    'React.js',
    'Vue.js',
    'Angular',
    'MongoDB',
  ]

  const seniorityList = ['Intern', 'Junior', 'Mid', 'Senior', 'Lead / Expert']
  const availabilityList = ['Full-time', 'Part-time', 'Contract']
  const locationsList = ['Poland', 'Europe', 'Other']

  return (
    <div className={styles.mainContainer}>
      <div className={styles.features}>
        <Dropdown
          text="Technology"
          options={technologyList}
          onSelect={(option) => handleSelect(option, 'Technology')}
          selectedValue={selectedTechnology}
        />
        <Dropdown
          text="Seniority"
          options={seniorityList}
          onSelect={(option) => handleSelect(option, 'Seniority')}
          selectedValue={selectedSeniority}
        />
        <Dropdown
          text="Availability"
          options={availabilityList}
          onSelect={(option) => handleSelect(option, 'Availability')}
          selectedValue={selectedAvailability}
        />
        <Dropdown
          text="Location"
          options={locationsList}
          onSelect={(option) => handleSelect(option, 'Location')}
          selectedValue={selectedLocation}
        />
      </div>
      <div className={styles.devType}>
        <DevTypeButton
          variant="frontend"
          onClick={() => console.log('frontend')}
        >
          Frontend
        </DevTypeButton>
        <DevTypeButton variant="backend" onClick={() => console.log('backend')}>
          Backend
        </DevTypeButton>
        <DevTypeButton
          variant="fullstack"
          onClick={() => console.log('fullstack')}
        >
          Fullstack
        </DevTypeButton>
      </div>
    </div>
  )
}

export default Filters
