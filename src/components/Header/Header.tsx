import React from "react";
import eventsBus from "../../components-communication/eventsBus";
import { EventName } from "../../components-communication/types";
import Button from "@mui/material/Button";
import { Box, Slider } from "@mui/material";
import "./Header.css";
import { InitialArraySize, MaxArraySize } from "../../config";

function Header() {
  return (
    <>
      <h1 className="headline">Sorting Visualizer</h1>
      <Box
        my="8px"
        mx="8px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <Button
            sx={{ m: 0.8 }}
            variant="contained"
            onClick={() => {
              eventsBus.dispatch(EventName.Sort, {
                algorithmName: "mergeSort",
              });
            }}
          >
            Merge sort
          </Button>
          <Button
            sx={{ m: 0.8 }}
            variant="contained"
            onClick={() => {
              eventsBus.dispatch(EventName.Sort, { algorithmName: "heapsort" });
            }}
          >
            Heap sort
          </Button>
          <Button
            sx={{ m: 0.8 }}
            variant="contained"
            onClick={() => {
              eventsBus.dispatch(EventName.Sort, {
                algorithmName: "quicksort",
              });
            }}
          >
            Quick sort
          </Button>
        </Box>
        <Slider
          sx={{ width: "250px", m: 0.8 }}
          onChange={(_, value) => {
            eventsBus.dispatch(EventName.SizeChange, { size: value as number });
          }}
          defaultValue={InitialArraySize}
          max={MaxArraySize}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Button
          sx={{ m: 0.8 }}
          variant="contained"
          onClick={() => {
            eventsBus.dispatch(EventName.NewArray);
          }}
        >
          Generate new array
        </Button>
      </Box>
    </>
  );
}

export default Header;
