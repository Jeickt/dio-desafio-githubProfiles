import useGithub from '../../hooks/github-hooks'
import * as S from './styled'

const Profile = () => {
  const { github } = useGithub()

  return (
    <S.Wrapper>
      <S.WrapperImage src={github.user.avatar} alt='Avatar of user' />
      <S.WrapperInfoUser>
        <div>
          <h1>{github.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username: </h3>
            <a href={github.user.html_url} target='_blank' rel='noreferrer'>
              {github.user.login}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{github.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{github.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={github.user.blog} target='_blank' rel='noreferrer'>
              {github.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{github.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{github.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{github.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{github.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
