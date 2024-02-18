import React, { FC, ReactElement, ReactNode, useState, useEffect } from "react";
import { StyledGameboard } from "@/lib/styles";
import type { Coordinate } from '@/lib/utils/types';

export const Gameboard: FC = (): ReactElement => {
   const [inProgress, setInProgress] = useState<boolean>(false);
   const [p1Wins, setP1Wins] = useState<number>(0);
   const [p1Losses, setP1Losses] = useState<number>(0);
   const [p2Wins, setP2Wins] = useState<number>(0);
   const [p2Losses, setP2Losses] = useState<number>(0);
   const [p1Pieces, setP1Pieces] = useState<Map<string, Coordinate>>(new Map());
   const [p2Pieces, setP2Pieces] = useState<Map<string, Coordinate>>(new Map());

   useEffect(() => { }, [inProgress]);

   return <StyledGameboard></StyledGameboard>;
};
