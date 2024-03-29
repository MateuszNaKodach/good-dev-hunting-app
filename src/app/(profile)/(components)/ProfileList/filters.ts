import { ProfileModel } from '@/app/(profile)/types'
import { FilterOption } from '@/contexts/FilterContext'

export const filterByPosition =
  (positionFilter: FilterOption[]) => (profile: ProfileModel) => {
    if (positionFilter.length === 0) return true
    return positionFilter.some(
      (pos) => profile.position.toUpperCase() === pos.value.toUpperCase(),
    )
  }

export const filterBySeniority =
  (seniorityFilter: FilterOption[]) => (profile: ProfileModel) => {
    if (seniorityFilter.length === 0) return true
    return seniorityFilter.some(
      (filter) =>
        filter.value.toUpperCase() === profile.seniority.toUpperCase(),
    )
  }

// TODO: implement filter by location (cities and countreis should be implemented )
export const filterByLocation =
  (locationFilter: FilterOption[]) => (profile: ProfileModel) => {
    if (locationFilter.length === 0) return true
    return locationFilter.some(
      (location) => profile.country.name === location.value,
    )
  }

export const filterByTechnology =
  (technologyFilter: FilterOption[]) => (profile: ProfileModel) => {
    if (technologyFilter.length === 0) return true
    return technologyFilter.some(
      (techFilter) =>
        !!profile.techStack.find(
          (tech) => tech.name.toUpperCase() === techFilter.value.toUpperCase(),
        ),
    )
  }

export const filterByAvailability =
  (availabilityFilter: FilterOption[]) => (profile: ProfileModel) => {
    if (availabilityFilter.length === 0) return true
    return availabilityFilter.some(
      (availability) =>
        !!profile.employmentTypes.find(
          (employmentType) =>
            employmentType.toUpperCase() === availability.value.toUpperCase(),
        ),
    )
  }
