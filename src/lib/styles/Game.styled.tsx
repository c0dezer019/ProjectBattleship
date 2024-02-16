import styled from "styled-components";

interface ImageProps {
   $url: string;
   $rot?: boolean;
   $rotVal?: number;
}

export const Grid = styled.div``;

export const Cell = styled.div``;

export const Panel = styled.div``;

export const GamePiece = styled.img.attrs<ImageProps>(props => ({
   $url: props.$url,
   $rotVal: props.$rot ? 90 : 0,
}))`
   src: ${props => require(props.$url)};
   transform: rotate(${props => props.$rotVal});
   height: 10px;
   width: 5px;
`;
