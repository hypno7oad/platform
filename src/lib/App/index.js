import React, { useState } from 'react'
import {DefaultContent} from '@hypno7oad/ui'
import {
  HorizontalLayout,
  VerticalLayout,
  Panel,
  View
} from 'nice-react-layout'
import './App.css'

function App({
  Users,
  HeaderText,
  SelectedUserText,
  selectUserPlaceholder,
  headerHeight,
  headerUserBoxWidth,
  useSelectedUserState,
  ContentComponent,
  clientCustomizations,
  debug
}) {

  const [selectedUser, setSelectedUser] = useSelectedUserState()
  if (debug) debugger
  
  if (selectedUser !== null) {
    SelectedUserText = () => (<h5>{selectedUser.client}: {selectedUser.username}</h5>)
  }
  const handleChange = event => {
    window.location = selectedUser.url
  }

  return (
    <View>
      <VerticalLayout mockup>
        <Panel fixed fixedHeight={headerHeight}>
          <HorizontalLayout mockup>
            <Panel centered>
              <HeaderText></HeaderText>
            </Panel>
            <Panel fixed fixedWidth={headerUserBoxWidth}>
              <VerticalLayout>
                <Panel>
                  <h3>
                    <select autoFocus onChange={handleChange}>
                      {App.mapUsersToOptions(Users, selectedUser)}
                    </select>
                  </h3>
                </Panel>
                <Panel>
                  <SelectedUserText></SelectedUserText>
                </Panel>
              </VerticalLayout>
            </Panel>
          </HorizontalLayout>
        </Panel>
        <Panel centered>
          {ContentComponent
            ? <ContentComponent user={selectedUser} {...clientCustomizations}></ContentComponent>
            : <DefaultContent user={selectedUser} {...clientCustomizations}></DefaultContent>
          }
        </Panel>
      </VerticalLayout>
    </View>
  )
}
App.mapUsersToOptions = (Users, selectedUser) => Users.map((user) => (<option
  value={user.username}
  key={user.username}
  selected={selectedUser === user}
>{user.displayName}</option>))

App.defaultProps = {
  HeaderText: () => (<h1>Lazy loading of Custom UI Components PoC</h1>),
  SelectedUserText: () => (<h5>Please select a user</h5>),
  selectUserPlaceholder: 'Select a User:',
  headerHeight: 150,
  headerUserBoxWidth: 200,
  useSelectedUserState: () => useState(null)
}
export default App