import React, { FC, ReactElement, useEffect, useState } from "react";

import { StyledGrid } from "@/lib/styles";

interface Props {
	rows?: number;
	cols?: number;
}

export const Grid: FC<Props> = ({ rows, cols }): ReactElement => {
	const [_rows, setRows] = useState<number>(10);
	const [_cols, setCols] = useState<number>(10);

	useEffect(() => {
		if (rows) setRows(rows);
		if (cols) setCols(cols);
	}, [rows, cols]);

	return <StyledGrid></StyledGrid>;
};
