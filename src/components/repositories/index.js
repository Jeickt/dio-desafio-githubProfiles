import { useEffect, useState } from 'react'
import useGithub from '../../hooks/github-hooks'
import RepositoryItem from '../repository-item'
import * as S from './styled'

const Repositories = () => {
  const { github, getUserRepos, getUserStarred } = useGithub()
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

  useEffect(() => {
    if (github.user.login) {
      getUserRepos(github.user.login)
      getUserStarred(github.user.login)
    }
    setHasUserForSearchRepos(github.repositories)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [github.user.login])

  return (
    <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {github.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {github.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  )
}

export default Repositories
