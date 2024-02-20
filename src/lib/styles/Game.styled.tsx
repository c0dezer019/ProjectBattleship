'use client'
import styled from "styled-components";

interface ImageProps {
   $url: string;
   $rot?: boolean;
   $rotVal?: number;
   $height: number;
   $width: number;
}

export const StyledGameboard = styled.div`
   border: 1px solid black;
   height: 800px;

`;

export const StyledGridCell = styled.div`
   height: 5%;
   width: 5%;
`;

export const StyledPanel = styled.div`
   height: 100%;
`;

export const StyledGrid = styled.div``;

export const StyledGamePiece = styled.img.attrs<ImageProps>(props => ({
   $url: props.$url,
   $rotVal: props.$rot ? 90 : 0,
}))`
   src: require(${props => props.$url});
   transform: rotate(${props => props.$rotVal});
   height: ${props => props.$height}px;
   width: ${props=> props.$width}px;
`;
