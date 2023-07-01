import React, { useEffect, useState } from "react";
import getBoats, { Boat } from "../api/getBoats";
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

const BoatsList = () => {
  const [boats, setBoats] = useState<Boat[]>([]);
  useEffect(() => {
    const fetchBoats = async () => {
      const boats = await getBoats();
      setBoats(boats);
    };
    fetchBoats();
  }, []);
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
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
              <Link to={`/rent/${boat.id}`}>
                <Button variant="text">Rent</Button>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default BoatsList;
