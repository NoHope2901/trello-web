import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { capitalizeFirstLetter } from "~/utils/formatters";
const MENU_STYLES = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function BoardBar({ board }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",

        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip sx={MENU_STYLES} icon={<DashboardIcon />} label={board?.title} clickable />
        <Chip sx={MENU_STYLES} icon={<VpnLockIcon />} label={capitalizeFirstLetter(board?.type)} clickable />
        <Chip sx={MENU_STYLES} icon={<AddToDriveIcon />} label='Add to drive' clickable />
        <Chip sx={MENU_STYLES} icon={<BoltIcon />} label='Automation' clickable />
        <Chip sx={MENU_STYLES} icon={<FilterListIcon />} label='Filters' clickable />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{ color: "white", borderColor: "white", "&:hover": { border: "white" } }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/564x/0c/25/42/0c25424c87b5184c185d84c2d40a99de.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/564x/82/7d/f7/827df74fa74ae193322a82095e2d262c.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/564x/c7/2d/44/c72d44f2057dc26ea674cc2037b1d919.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/736x/9c/db/26/9cdb26b90c905308240aaf30d4369445.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/564x/74/e0/69/74e06944cdf4df6ad62fb928ff52fdf1.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/564x/0c/25/42/0c25424c87b5184c185d84c2d40a99de.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/564x/82/7d/f7/827df74fa74ae193322a82095e2d262c.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/564x/c7/2d/44/c72d44f2057dc26ea674cc2037b1d919.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/736x/9c/db/26/9cdb26b90c905308240aaf30d4369445.jpg' />
          </Tooltip>
          <Tooltip title='Cuongnv'>
            <Avatar alt='Gojo' src='https://i.pinimg.com/564x/74/e0/69/74e06944cdf4df6ad62fb928ff52fdf1.jpg' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
