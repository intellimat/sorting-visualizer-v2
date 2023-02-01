import React from "react";
import { EventName } from "../../components-communication/types";
import Button from "@mui/material/Button";
import { Box, Slider } from "@mui/material";
import "./Header.css";
import { InitialArraySize, MaxArraySize, MinArraySize } from "../../config";
import useDisableButtons from "./hooks/useDisableButtons";
import eventsBus from "../../components-communication/eventsBus";

function Header() {
  const { buttonDisabled } = useDisableButtons();
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
            disabled={buttonDisabled}
            sx={{ m: 0.8 }}
            variant="contained"
            onClick={() => {
              eventsBus.next({
                type: EventName.SortingStarted,
                payload: { algorithmName: "mergeSort" },
              });
            }}
          >
            Merge sort
          </Button>
          <Button
            disabled={buttonDisabled}
            sx={{ m: 0.8 }}
            variant="contained"
            onClick={() => {
              eventsBus.next({
                type: EventName.SortingStarted,
                payload: { algorithmName: "heapsort" },
              });
            }}
          >
            Heap sort
          </Button>
          <Button
            disabled={buttonDisabled}
            sx={{ m: 0.8 }}
            variant="contained"
            onClick={() => {
              eventsBus.next({
                type: EventName.SortingStarted,
                payload: { algorithmName: "quicksort" },
              });
            }}
          >
            Quick sort
          </Button>
        </Box>
        <Slider
          disabled={buttonDisabled}
          sx={{ width: "250px", m: 0.8 }}
          onChange={(_, value) => {
            eventsBus.next({
              type: EventName.NewArray,
              payload: { size: value },
            });
          }}
          defaultValue={InitialArraySize}
          min={MinArraySize}
          max={MaxArraySize}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Button
          disabled={buttonDisabled}
          sx={{ m: 0.8 }}
          variant="contained"
          onClick={() => {
            eventsBus.next({
              type: EventName.NewArray,
            });
          }}
        >
          Generate new array
        </Button>
      </Box>
    </>
  );
}

export default Header;
