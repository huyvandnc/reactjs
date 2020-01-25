import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    left: 0px;
    box-sizing: border-box;
    z-index: 3;
    width: 100%;
    height: 44px;
    font-size: 13px;
    font-weight: 500;
    color: white;
    background: #673ab7;
    transition: background 300ms ease-out 0s;
    padding: 0px;
`;

const Container = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 1.11111rem;
`;

const Header = () => {
    return (
        <div>
            <Nav>
                <Container>
                    Cày Kiếm Cơm
                </Container>
            </Nav> 
        </div>
    );
}

export default Header;