import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Nav = styled.nav`
    position: fixed;
    padding: 0px 15px;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 1003;
    background-color: #fafbfc;
    border-bottom: 1px solid #e1e4e8;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    min-width: 30px;
    min-height: 30px;
    padding: 0px 10px;
    color: #425a70;
    text-decoration: none;
    line-height: 30px;
    letter-spacing: 0.4px;
    border-radius: 3px;
    &:hover {
        background-color: rgba(67, 90, 111, 0.06);
    }
`;

const Header = (props) => {
    const { auth } = props;
    const { token, loggingIn, currentUsers } = auth;
    return (
        <header>
            <Nav>
                { loggingIn ? <StyledLink to="/">loggingIn!</StyledLink> : <StyledLink to="/signin">Đăng nhập!</StyledLink> }
            </Nav>
        </header>
    );
}

export default Header;