import { useContext } from 'react'
import { GithubContext } from '../providers/github-provider'

const useGithub = () => {
  const { github, getUser, getUserRepos, getUserStarred } =
    useContext(GithubContext)

  return { github, getUser, getUserRepos, getUserStarred }
}

export default useGithub
