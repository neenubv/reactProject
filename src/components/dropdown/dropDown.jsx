import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";


const DropDown = (props) => {

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        More
      </DropdownToggle>
      <DropdownMenu>
          <DropdownItem>
          <Link className="nav-link text-dark" to={"/quiz"}>
            Quiz
          </Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
          <Link className="nav-link text-dark" to={"/qns"}>
            Qns
          </Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
              <Link className="nav-link text-dark" to={"/recharts"}>
              Recharts
              </Link>
            </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default DropDown;