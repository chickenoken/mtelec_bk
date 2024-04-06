"use client";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { RiMenuFoldFill } from "react-icons/ri";
import { Collapse, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaUser, FaUserTie } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { MdExpandLess, MdExpandMore, MdOutlineExpandMore } from "react-icons/md";
import { logout } from "./LayoutAction";
import { toast } from "react-toastify";
import { useRouter } from "next-nprogress-bar";

const drawerWidth: number = 200;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

const LayoutUser = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => { setOpen(!open);};
  const [reOp, setReOp] = React.useState(false);
  const router = useRouter();

  const handleLogout = async() => {
    let result = await logout();
    if(result && result.status === 200) {
      toast.success(result.error, {
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
      router.push("/login");
    }else{
      toast.error(result.error, {
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    }
  }

  return (
    <>
      <AppBar position="absolute" open={open} className="bg-mte text-white">
        <Toolbar sx={{ pr: "24px"}}>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}>
            <Image src="/asset/img/logo_white.png" width={50} height={50} alt="mtelec logo"/>
          </IconButton>
          <Typography
            component="h6"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: [1],
          }}
        >
          <Link href='/user'>
            <Image className="m-2" src="/asset/img/logo.png" width={50} height={50} alt="mtelec logo"/>
          </Link>
          <IconButton onClick={toggleDrawer}>
            <RiMenuFoldFill/>
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <Link href='/user/customer'>
            <ListItemButton>
              <ListItemIcon>
                <FaUser size="1.5em" />
              </ListItemIcon>
              <ListItemText primary="Customer" />
            </ListItemButton>
          </Link>
          <ListItemButton onClick={() => setReOp(!reOp)}>
            <ListItemIcon>
              <BsBriefcaseFill size="1.5em" />
            </ListItemIcon>
            <ListItemText primary="Recruitment" />
            {reOp ? <MdExpandLess /> : <MdExpandMore />}
          </ListItemButton>
          <Collapse in={reOp} timeout="auto" unmountOnExit>
            <Link href='/user/recruitment'>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <BsBriefcaseFill />
                  </ListItemIcon>
                  <ListItemText primary="Recruitment" />
                </ListItemButton>
              </List>
            </Link>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaUserTie />
                </ListItemIcon>
                <ListItemText primary="Applicant" />
              </ListItemButton>
            </List>
          </Collapse>
          <Link href='/user/project'>
            <ListItemButton>
              <ListItemIcon>
                <BsFillBuildingsFill size="1.5em" />
              </ListItemIcon>
              <ListItemText primary="Project" />
            </ListItemButton>
          </Link>
          <Link href='/user/categories'>
            <ListItemButton>
              <ListItemIcon>
                <BiSolidCategory size="1.5em"/>
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </Link>
          <Link href='/user/news'>
            <ListItemButton>
              <ListItemIcon>
                <IoNewspaperSharp size="1.5em" />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItemButton>
          </Link>
          
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <IoLogOutOutline size="1.5em" />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}

export default LayoutUser