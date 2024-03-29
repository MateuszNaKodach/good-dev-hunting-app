import Tabs from '@/app/(profile)/(components)/FilterTabs/Tabs'
import SearchWrapper from '@/app/(profile)/moderation/(components)/ModerationSearchProfile/SearchWrapper'
import { getAllPublishedProfilesPayload } from '@/backend/profile/profile.service'

import styles from './Filters.module.scss'

export default async function ModerationFilters() {
  const profiles = await getAllPublishedProfilesPayload()

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tabsWrapper}>
        <h2 className={styles.title}>Moderation</h2>
        <Tabs />
      </div>
      <SearchWrapper profiles={profiles} />
    </div>
  )
}
