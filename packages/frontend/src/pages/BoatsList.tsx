import React, { useEffect, useState } from "react";
import getBoats from "../api/getBoats";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import { Link } from "react-router-dom";
import useNotification from "../hooks/useNotification";
import { Boat } from "../api/types";

const BoatsList = () => {
  const [boats, setBoats] = useState<Boat[]>([]);
  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const boats = await getBoats();
        setBoats(boats);
      } catch (e: any) {
        showNotification({ message: e.message, severity: "error" });
      }
    };
    fetchBoats();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <List
        sx={{ width: "100%", maxWidth: 420, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Boats available
          </ListSubheader>
        }
      >
        {boats.map((boat: Boat) => {
          return (
            <ListItem>
              <ListItemIcon>
                <DirectionsBoatIcon />
              </ListItemIcon>
              <ListItemText primary={boat.name} />
              <ListItemText primary={boat.charge} />
              <ListItemText primary={boat.status} />
              <Link to={`/rent/${boat.id}`}>
                <Button variant="text">Rent</Button>
              </Link>
              <Link to={`/return/${boat.id}`}>
                <Button variant="text">Return</Button>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default BoatsList;
