'use client'
import styles from './CreateProfileTopBar.module.scss'
import { Button } from '@/inputs/Button/Button'
import { ErrorIcon } from '../../../assets/icons/ErrorIcon'
import { useFormikContext } from 'formik'
import { useRouter } from 'next/navigation'

const ProfileTopBar = () => {
  const router = useRouter()
  const { handleSubmit, errors } = useFormikContext()

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleSubmit()
    router.push('/my-profile')
  }

  return (
    <div className={styles.titleBox}>
      <div className={styles.errorWrapper}>
        <span>Create profile page</span>
        {Object.keys(errors).length > 0 && (
          <div className={styles.errorMsg}>
            <ErrorIcon />
            <span>Fill out the form to complete the profile</span>
          </div>
        )}
      </div>
      <Button variant="primary" onClick={handleButtonClick} type="submit">
        Save and preview profile
      </Button>
    </div>
  )
}

export default ProfileTopBar
