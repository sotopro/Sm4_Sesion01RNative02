import React from 'react'
import { Skeleton } from '../Skeletons/Profiles'
import {
    Container,
    Email,
    Image,
    ImageContainer,
    Name,
    TextWrapper,
    Username
}from './styles'

const Profile = ({ loading, data }) => {
    if(loading === true) {
        return (
            <Container>
                <ImageContainer>
                    <Skeleton borderRadius={25} />
                </ImageContainer>
                <TextWrapper>
                    <Name>
                        <Skeleton borderRadius={20} />
                    </Name>
                    <Username>
                        <Skeleton borderRadius={20} />
                    </Username>
                    <Email>
                        <Skeleton borderRadius={20} />
                    </Email>
                </TextWrapper>
            </Container>
        )
    }
    
    if(data) {
        return (
            <Container>
                <ImageContainer>
                    <Image src={data.picture} />
                </ImageContainer>
                <TextWrapper>
                    <Name>{data.name}</Name>
                    <Username>{data.username}</Username>
                    <Email>{data.email}</Email>
                </TextWrapper>
            </Container>
        )
    }
    return null;
}

export default Profile;