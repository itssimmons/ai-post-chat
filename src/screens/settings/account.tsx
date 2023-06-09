import styled from 'styled-components/native'

import Avatar from '#/components/Avatar'
import GlobalLayout from '#/components/GlobalLayout'
import { Heading } from '#/components/Header'
import Input from '#/components/Input'
import darkenHexColor from '#/helpers/darkenHexColor'
import useCollector from '#/hooks/useCollector'
import useSession from '#/hooks/useSession'

export default function () {
  const { session, updateSession } = useSession()
  const { collection, handleChanges, submit } = useCollector({
    firstName: session.firstName,
    lastName: session.lastName,
    bio: session.bio
  })

  return (
    <GlobalLayout paddings={{ top: 80, horizontal: 8 }}>
      <Heading title='Account' />

      <ScrolleableLayout contentContainerStyle={{ paddingVertical: 20 }}>
        <AvatarWrapper>
          <Avatar editable size={150} />
          <EditPhotoLabel>Edit Photo</EditPhotoLabel>
        </AvatarWrapper>
        <Input.Text
          label='First name'
          value={collection.firstName}
          onChange={value => handleChanges({ key: 'firstName', value })}
        />
        <Input.Text
          label='Last name'
          value={collection.lastName}
          onChange={value => handleChanges({ key: 'lastName', value })}
        />
        <Input.Text
          type='textarea'
          label='Bio'
          value={collection.bio}
          onChange={value => handleChanges({ key: 'bio', value })}
          height={100}
          limit={120}
        />
        <Input.Submit
          label='Save'
          onPress={submit(values => updateSession(values))}
        />
      </ScrolleableLayout>
    </GlobalLayout>
  )
}

const ScrolleableLayout = styled.ScrollView``

const AvatarWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  margin-bottom: 10px;
`

const EditPhotoLabel = styled.Text`
  font-size: ${props => 14 + props.theme.fontSize}px;
  font-weight: 400;
  color: ${props => darkenHexColor(props.theme.colors.primary, 35)};
`
