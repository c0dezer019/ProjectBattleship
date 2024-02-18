import React, { FC, ReactElement, useEffect, useState } from 'react';
import type { Coordinate } from '@/lib/utils/types';

interface Props {
   rows?: number;
   cols?: number;
}

export const Grid: FC<Props> = ({rows, cols}): ReactElement => {
   const [_rows, setRows] = useState<number>(10);
   const [_cols, setCols] = useState<number>(10);
   const [p1Hits, setP1Hits] = useState<Map<string, Coordinate>>(new Map());
   const [p1Misses, setP1Misses] = useState<Array<Coordinate>>([]);
   const [p2Hits, setP2Hits] = useState<Map<string, Coordinate>>(new Map());
   const [p2Misses, setP2Misses] = useState<Array<Coordinate>>([]);

   useEffect(() => { 
      if (rows) setRows(rows);
      if (cols) setCols(cols);
    }, [rows, cols]);

   return (<></>);
};
