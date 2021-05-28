import { withRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/Image'

const Header = styled.header`
    position:fixed;
    background-color: white;
    top:0;
    left:0;
    width:100%;
    height: 60px;
    align-items: center;
    z-index: 10;
    box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.3);
`
const Container = styled.div`
    max-width: 60rem;
    margin: 0rem auto 6rem;
    
`;
 const HeadIcon = styled.div`
    
`;

const List = styled.ul`
    margin-top: 10px;
    float: left;
    display:flex;
`;

const SImage = styled(Image)`
    border-radius: 9999px;
`;
const Item = styled.li`
    position: relative;
    margin-left: 25px;
    list-style:none;
    padding: 7px 15px;
    width: 90px;
    height: 60px;
    text-align: center;
    border-bottom:5px solid 
    ${props => (props.current ? "RED" : "transparent")};
    transition:border-bottom .5s ease-in-out;

`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
        &:hover{
            color: RED;
            text-decoration: none;
            opacity: 0.9;
}
`;

const RightMenu = styled.div`
    margin-top: 10px;
    padding-right: 50px;
    display: flex;
    float: right;
`;
export default withRouter(myHeader)

function myHeader({router}) {

    return (
      <Header>
          <Container>
        <List>
            <HeadIcon>
                <SLink href="/">
                    <a>
                    <SImage
                        priority
                        src="/images/deno.jpg"
                        height={44}
                        width={44}
                    />
                    </a>
                </SLink>
            </HeadIcon>

        </List>
        <RightMenu>
            <SLink href="https://github.com/maddrake220">
                <a target="_blank">
                    <SImage
                        priority
                        src="/images/github.jpg"
                        height={44}
                        width={44}
                    />
                </a>
            </SLink>
        </RightMenu>
        </Container>
    </Header>)
}

