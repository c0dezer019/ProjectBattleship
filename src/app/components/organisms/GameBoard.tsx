import React, { FC, ReactElement } from "react";

import { StyledGameboard } from "@/lib/styles";

import { Grid } from "../";

export const Gameboard: FC = (): ReactElement => {
	return (
		<StyledGameboard>
			<Grid></Grid>
		</StyledGameboard>
	);
};
