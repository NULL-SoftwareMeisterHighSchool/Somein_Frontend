import styled from "styled-components";
import { color } from "@styles/theme.style";
import { Title ,Body2, BodyLarge } from "@styles/text.style";
import { Link } from "react-router-dom";

export const MypageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px 0; 
    >div{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    @media (max-width:1500px) {
        align-items: start;
        flex-direction: column;
    }
`;

export const UserBox = styled.div`
    @media (max-width: 1250px) {
        display: flex;
        flex-direction: column;
    }
`;

export const UserSection = styled.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 20px;
`;

export const BtnArea = styled.div`
    display: flex;
    gap: 6px
`;

export const Btn = styled.div`
    padding: 14px 20px;
    min-width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.grayLight2};
    border-radius: 8px;
    cursor: pointer;
    >p{
        color: ${color.grayDark2};
    }
`;

export const UserIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

export const UserInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const UserName = styled(Title)`
    width: max-content;
`;

export const Email = styled(Body2)`
    color: ${color.grayDark1};
`;

export const UserDescript = styled(BodyLarge)`
`;

export const UserContectSection = styled.div`
    display: flex;
    padding: 0px 64px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px 0px;
    @media (max-width:1350px){
        padding: 0px 12px;
    }
    @media (max-width: 1250px) {
        padding: 0px 0px;
    }
`;

export const UserContectInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const UserContectTitle = styled(Body2)`
    width: min-content;
    color: ${color.grayDark1};
`;

export const UserContect = styled(Body2)`
    color: ${color.grayDark1};
`;

export const UserLink = styled(Link)`
    color: ${color.grayDark1};
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

export const Stack = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 12px;
`;

export const Blog = styled.div`
    display: flex;
    padding: 40px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

export const SubTitle = styled(Title)`
`;

export const BlogContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    overflow-x: auto;
`;

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
