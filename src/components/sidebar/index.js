import React, { useEffect, useState }  from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import './sidebar.css';
import { createMuiTheme, createTheme, ListItemIcon, ThemeProvider, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../action/category.action";
import { getAllNews, getAllNewsByCategoryId } from "../../action";
import { Link, useNavigate } from 'react-router-dom';



const Sidebar = () => {
  const [state, setState] = useState({ left: false });

  const navigate = useNavigate();

  //category state and category fetch api call
  const [categoryArray, setCategoryArray] = useState([]);

  const {categories} = useSelector((state) => state.category);
  const dispatch = useDispatch();

  // const categoryApi = async () => {
  //   try {
  //     const API = process.env.REACT_APP_BACKEND;

  //     const category = await axios.get(
  //       `${API}/categories`
  //     );
  //     console.log(category);
  //     setCategoryArray(category.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // categoryApi();
    dispatch(getAllCategories());
  }, []);

   

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className="list-heading">Categories</ListItem>
      </List>
      <Divider />
      <List>
      <ListItem
            style={{ height: 50, borderRadius: 3,marginBottom: "8px" }}
            button
            onClick={() => {dispatch(getAllNews())
              navigate('/');
            }}
          >
            <ListItemIcon>
              <img src={"https://img.icons8.com/fluent/96/000000/news.png"} className="category-icon" alt="news" />
            </ListItemIcon>
            <ListItemText primary={"All News"}   />
          </ListItem>
          {categories.map((text, index) => (
           <ListItem
          
           style={{ height: 50, borderRadius: 3, marginBottom: "8px", }}
           button
           onClick={() => {dispatch(getAllNewsByCategoryId(text._id));
                           navigate('/');
           }}
           key={text._id}
         >
            <ListItemIcon>
             <img src={text.imgLink} className="category-icon" alt={text} />
           </ListItemIcon>
           <ListItemText primary={text.name}  />
         </ListItem>
          
        ))}
      </List>

      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
      <i className="fi fi-bs-align-right absolute-center menu-icon" onClick={toggleDrawer("left", true)}  >
      </i>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Sidebar;
