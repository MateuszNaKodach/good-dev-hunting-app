import { getProfileByUserEmail } from '@/backend/profile/profile.service'
import { findUserByEmail } from '@/backend/user/user.service'
import { Container } from '@/components/Container/Container'
import CreateProfileBtn from '@/components/CreateProfileBtn/CreateProfileBtn'
import GithubAcc from '@/components/GithubAcc/GithubAcc'
import { GithubLoginButton } from '@/components/GithubLoginButton/GithubLoginButton'
import ModerationBtn from '@/components/ModerationBtn/ModerationBtn'
import MyProfileBtn from '@/components/MyProfileBtn/MyProfileBtn'
import { authOptions } from '@/lib/auth'
import { AppRoutes } from '@/utils/routes'
import { Role } from '@prisma/client'
import { getServerSession } from 'next-auth'
import styles from './LandingHeader.module.scss'
import FindTalentsBtn from '@/components/FindTalentsBtn/FindTalentsBtn'
import Logo from '@/components/Logo/Logo'
import { redirect } from 'next/navigation'

const LandingHeader = async () => {
  const session = await getServerSession(authOptions)

  const profile = session
    ? await getProfileByUserEmail(session.user.email)
    : null
  const user = session ? await findUserByEmail(session.user.email) : null
  const userIsModerator = user?.roles.includes(Role.MODERATOR)

  if (session) {
    return (
      <header className={styles.wrapper}>
        <Container>
          <div className={styles.headerContent}>
            <Logo />
            <div className={styles.frameButtons}>
              {userIsModerator && <ModerationBtn />}
              {user?.profile ? (
                <>
                  <MyProfileBtn />
                </>
              ) : (
                <div className={styles.frameButtons}>
                  <CreateProfileBtn data-testid="create-profile-button" />
                </div>
              )}
              {profile ? (
                <>
                  <GithubAcc />
                </>
              ) : null}
            </div>
          </div>
        </Container>
      </header>
    )
  }

  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.headerContent}>
          <Logo />
          <div className={styles.frameButtons}>
            <div className={styles.buttonBox}>
              <FindTalentsBtn variant={'secondary'}>
                Find talents
              </FindTalentsBtn>
              <GithubLoginButton />
              <CreateProfileBtn />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
export default LandingHeader