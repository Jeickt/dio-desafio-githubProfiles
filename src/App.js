import Layout from './components/layout'
import NoSearch from './components/no-search'
import Profile from './components/profile'
import Repositories from './components/repositories'
import useGithub from './hooks/github-hooks'

const App = () => {
  const { github } = useGithub()
  return (
    <Layout>
      {github.hasUser ? (
        <>
          {github.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  )
}

export default App
