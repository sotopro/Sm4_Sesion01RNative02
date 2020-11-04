import React from 'react'
import styled from 'styled-components'

const SkeletonPulse = styled.div `
    display: inline-block;
    height: 100%;
    width: 100%;
    background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #cccccc 100%);
    background-size: 400% 400%;
    animation: pulse 2.2s ease-in-out infinite;
    border-radius: ${props => 
    `${props.borderRadius}px` || "0px"};
    display: flex;
    flex-direction: row;
    margin: 16px 0px;
    @keyframes pulse {
        0% {
            background-position: 0% 0%
        }
        100% {
            background-position: -120% 0%
        }
    }
`;

const SkeletonBar = styled(SkeletonPulse)`
    width: 5.5em;
    &::before {
        content: "\00a0"
    }
`;

export const Skeleton = (props) => {
    return (
        <SkeletonPulse {...props} />
    )
}

export { SkeletonBar}