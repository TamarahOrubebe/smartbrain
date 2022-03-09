import { React, Component } from 'react';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

class ProfileIcon extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropDownOpen: false
            
        }
    }

    toggle = () => {

        this.setState(prevState => ({
            dropDownOpen: !prevState.dropDownOpen
        }));

     } 

    render() {

        return (
					<div className="pa4 tc">
						<Dropdown
							direction="left"
							isOpen={this.state.dropDownOpen}
							toggle={this.toggle}
						>
							<DropdownToggle
								tag="span"
								data-toggle="dropdown"
								aria-expanded={this.state.dropDownOpen}
							>
								<img
									src="http://tachyons.io/img/logo.jpg"
									className="br-100 h3 w3 dib"
									alt="avatar"
								/>
							</DropdownToggle>
							<DropdownMenu
								className="b--transparent shadow-5"
								style={{
									marginTop: "20px",
									backgroundColor: "rgba(255, 255, 255, 0.5",
								}}
							>
								<DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
								<DropdownItem
									onClick={() => this.props.onRouteChange("signout")}
								>
									Sign Out
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				);
    }
}

export default ProfileIcon;