import { useCollapseMenu } from "../../hooks/useCollapseMenu";
import { useBoard } from "../../hooks/useBoard";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Button, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";
import { cell } from "../../types/cell";

const CollapseMenu = () => {
	const { selectedCell, close } = useCollapseMenu();
	const { collapse, restore } = useBoard();

	const cellStates = selectedCell && Array.from(selectedCell.possibleStates.values()).sort();

	const handleClickToCollapse = (v: number) => {
		collapse(selectedCell as cell, v);
		close();
	};

	function onClickRevert() {
		restore(selectedCell as cell);
		close();
	}

	const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (!selectedCell?.hasCollapsed && cellStates?.includes(+e.key)) {
			e.preventDefault();
			handleClickToCollapse(+e.key);
		}
	};

	return (
		<Dialog open={!!selectedCell} onClose={close} maxWidth={"xs"} onKeyDown={handleKeyPress}>
			{selectedCell && (
				<>
					<DialogTitle sx={{ paddingBottom: "5px" }}>
						<Box display="flex" alignItems="center" justifyContent="space-between">
							<Box>
								<b> Cell Id: {selectedCell.id}</b>
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
							<span>Has collapsed: {selectedCell.hasCollapsed ? "Yes" : "No"}</span>
							<br />
							<Box component={"span"} sx={{ fontSize: "h6.fontSize", fontWeight: "bold" }}>
								{selectedCell.hasCollapsed ? "Has Collapsed" : "Collapse"} into:{" "}
								{selectedCell.hasCollapsed && cellStates?.[0]}
							</Box>
						</DialogContentText>
						<DialogActions style={{ justifyContent: "center" }}>
							{selectedCell.hasCollapsed ? (
								<Button onClick={() => onClickRevert()} variant="outlined">
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
											<Button key={i} onClick={() => handleClickToCollapse(v)} variant="outlined">
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
