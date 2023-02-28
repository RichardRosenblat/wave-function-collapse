import { useCollapseMenu } from "../../hooks/useCollapseMenu";
import { useBoard } from "../../hooks/useBoard";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Button, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";

const CollapseMenu = () => {
	const { selectedCell: cell, close } = useCollapseMenu();
	const { collapse, restore } = useBoard();

	const cellStates = cell && Array.from(cell.possibleStates.values());
	return (
		<Dialog open={!!cell} onClose={close} maxWidth={"xs"}>
			{cell && (
				<>
					<DialogTitle sx={{ paddingBottom: "5px" }}>
						<Box display="flex" alignItems="center" justifyContent="space-between">
							<Box>
								<b> Cell Id: {cell.id}</b>
							</Box>
							<Box>
								<IconButton onClick={close}>
									<CloseIcon />
								</IconButton>
							</Box>
						</Box>
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							<span>Has collapsed: {cell.hasCollapsed ? "Yes" : "No"}</span>
							<br />
							<Box component={"span"} sx={{ fontSize: "h6.fontSize", fontWeight: "bold" }}>
								{cell.hasCollapsed ? "Has Collapsed" : "Collapse"} into:{" "}
								{cell.hasCollapsed && cellStates?.[0]}
							</Box>
						</DialogContentText>
						<DialogActions style={{ justifyContent: "center" }}>
							{cell.hasCollapsed ? (
								<Button onClick={() => restore(cell)} variant="outlined">
									revert
								</Button>
							) : (
								<Box
									justifyContent={"center"}
									alignItems={"center"}
									display={"flex"}
									flexWrap={"wrap"}
									width={"60%"}
								>
									{cellStates?.map((v, i) => {
										return (
											<Button key={i} onClick={() => collapse(cell, v)} variant="outlined">
												{v}
											</Button>
										);
									})}
								</Box>
							)}
						</DialogActions>
					</DialogContent>
				</>
			)}
		</Dialog>
	);
};

export default CollapseMenu;
