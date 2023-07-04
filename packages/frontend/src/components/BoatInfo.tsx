import React, { useEffect, useState } from 'react';
import { Boat, Status } from '../api/types';
import getBoatById from '../api/getBoatById';
import { Box, Button, Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import useNotification from '../hooks/useNotification';
import rentBoatById from '../api/rentBoatById';
import returnBoatById from '../api/returnBoatById';

export enum BoatInfoType {
  Rent = "rent",
  Return = "return",
}

interface BoatInfoProps {
  id?: string;
  type: BoatInfoType;
}

const RENT_CHARGE_THRESHOLD = 80;

const BoatInfo = ({ id, type }: BoatInfoProps) => {
  const [boat, setBoat] = useState<Boat | undefined>();

  const { showNotification } = useNotification();
  const fetchBoat = async () => {
    try {
      const boat = await getBoatById(id);
      setBoat(boat);
    } catch (e: any) {
      showNotification({ message: e.message, severity: "error" });
    }
  };

  useEffect(() => {
    fetchBoat();
  }, [id]);
  const handleRent = async () => {
    if (boat?.charge && boat?.charge < RENT_CHARGE_THRESHOLD) {
      showNotification({ message: "Boat charge is not sufficient", severity: "error" });
      return;
    }
    await rentBoatById(boat?.id);
    fetchBoat();
    showNotification({ message: "Rented successfully", severity: "success" });
  };

  const handleReturn = async () => {
    if (boat?.status !== Status.Renting) {
      showNotification({ message: "Boat can't be returned", severity: "error" });
      return;
    }
    await returnBoatById(boat?.id);
    fetchBoat();
    showNotification({ message: "Returned successfully", severity: "success" });
  };

  const handleMap = {
    [BoatInfoType.Rent]: () => handleRent(),
    [BoatInfoType.Return]: () => handleReturn(),
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              Boat name
            </Typography>
            <Typography variant="body1">{boat?.name}</Typography>
            <Typography variant="h5" color="text.secondary">
              Charge level
            </Typography>
            <Typography variant="body2">{boat?.charge}%</Typography>
            <Typography variant="h5" color="text.secondary">
              Availability status
            </Typography>
            <Typography variant="body2">{boat?.status}</Typography>
            <Button variant="contained" onClick={handleMap[type]}>
              {type.toUpperCase()}
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default BoatInfo;
