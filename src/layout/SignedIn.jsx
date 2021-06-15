import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="" />
                <Dropdown pointing="top left" text="Mete">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Informations" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Log out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div >
    )
}