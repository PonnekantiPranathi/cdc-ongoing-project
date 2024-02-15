import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Checkbox, FormGroup, MenuItem,ListItemText,Select,} from "@mui/material";
import { Typography, TextField, Grid, Box, Button } from "@material-ui/core";
import RowRadioButtonsGroup from "../../../global-components/Radiobutton";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import RowRadioButtons from "../../../global-components/Radiobutton2";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { Divider } from "@material-ui/core";
import ButtonGroup1 from "../../../global-components/ButtonGroup1";
import { EC_TYPE } from "../../../Redux/EC/ECTypes";
import { useSelector, useDispatch } from "react-redux";
import { DevTool } from "@hookform/devtools";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(5),
    borderRadius: 10,
    backgroundColor: "#F0F4FE",
  },
  savechangesButton: {
    marginTop: theme.spacing(2),
    borderSpacing: "4",
    marginLeft: "20.76vw",
    borderRadius: "10px",
    color: "#FFFFFF",
  },
  nextButton: {
    marginTop: theme.spacing(2),
    borderSpacing: "4",
    marginLeft: "3.56vw",
    color: "#FFFFFF",
    borderRadius: "10px",
    backgroundColor: "green",
  },
  datePicker: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    width: "23.35vw",
    "& input": { backgroundColor: "#FFFFFF" },
  },
  title: { fontSize: "16px", color: "#6F7492" },
}));

const inputStyle = {
  height: "7.61vh",
  width: "28.59vw",
  marginBottom: "20px",
  backgroundColor: "#FFFFFF",
};
const inputStyle1 = {
  height: "10.53vh",
  width: "63.33vw",
  marginBottom: "20px",
  backgroundColor: "#FFFFFF",
};
const inputStyle4 = {height:'4.2vh', width:'12.73vw',backgroundColor:'#FFFFFF', };
const asterisk = { color: "red" };
const Array1 = [
  { label: "BTech", value: "BTech" },
  { label: "MTech", value: "MTech" },
  { label: "PHD", value: "PHD" },
];
const Array2 = [
  { label: "Computer Science", value: "Computer Science" },
  { label: "Mathematics and Computing", value: "MnC" },
  { label: "Electrical", value: "Electrical" },
  { label: "Mechanical", value: "Mechanical" },
];

const Recruiter_EC = ({
  onclose,
  onButton,
  onButton1,
  onButton2,
  onButton3,
  jobId,
  Role,
}) => {
  const { register, handleSubmit, control,formState,watch} = useForm();
  const { errors } = formState;

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch(
        `/recruiter/job/updateEligibility/${jobId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Data sent successfully");
        onclose(true);
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handle = () => {
    setT(false);
    handleFormSubmit();
  };
  const handleBUTTON = () => {
    onclose(true);
  };
  const handlebutton = () => {
    onButton(true);
  };
  const handlebutton1 = () => {
    onButton1(true);
  };
  const handlebutton2 = () => {
    onButton2(true);
  };
  const handlebutton3 = () => {
    onButton3(true);
  };
  const [T, setT] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();

  // const Programs = useSelector((state) => state.Programs);
  // const Branches = useSelector((state) => state.Branches);
  const [Programs, setPrograms] = useState([]);
  const [Branches, setBranches] = useState([]);

  const handlePrograms = (e) => {
    setPrograms(e.target.value);
  };
  const handleBranches = (e) => {
    setBranches(e.target.value);
  };

  return (
    <Stack
      direction={"column"}
      mt={{ md: "6.59vh", sm: "15.81vh" }}
      ml={{ md: "16.4vw", sm: "5.81vw" }}
      height={{ md: "88.29vh", sm: "78.29vh" }}
      width={{ md: "71.64vw", sm: "81.64vw" }}
      className={classes.formContainer}
      elevation={10}
    >
      <Stack direction={"row"} mb={2} justifyContent={"space-between"}>
        <Typography>
          <b>JOB ROLE {Role}</b>
        </Typography>
        <IconButton aria-label="delete" onClick={handleBUTTON}>
          <ClearIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Grid
        item
        style={{
          fontFamily: "poppins",
          fontSize: "32px",
          color: "#1E53D7",
          marginTop: "-45px",
          marginBottom: "10px",
        }}
      >
        Eligibility Criteria
      </Grid>
      <Stack
        height={"53.24vh"}
        sx={{
          overflow: "scroll",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { width: "12px", height: "0.5px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#1E53D740",
            borderRadius: "6px",
            width: "20px",
            lineHeight: "2px",
          },
        }}
      >
        <form action="#" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" className={classes.title}>
              Programs{" "}
              <Box component="span" style={asterisk}>
                *
              </Box>{" "}
            </Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                multiple
                value={Programs}
                sx={{
                  height: "7.61vh",
                  width: "28.59vw",
                  marginBottom: "20px",
                  backgroundColor: "#FFFFFF",
                }}
                onChange={(e) => setPrograms(e.target.value)}
                renderValue={(selected) => selected.join(", ")}
              >
                {Array1.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <Checkbox checked={Programs.includes(option.value)} />
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" className={classes.title}>
              Branch{" "}
            </Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                multiple
                value={Branches}
                sx={{
                  height: "7.61vh",
                  width: "28.59vw",
                  marginBottom: "20px",
                  backgroundColor: "#FFFFFF",
                }}
                onChange={(e) => setBranches(e.target.value)}
                renderValue={(selected) => selected.join(", ")}
              >
                {Array2.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <Checkbox checked={Branches.includes(option.value)} />
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              {" "}
              CPI{" "}
            </Typography>
            <TextField
              placeholder="Text"
              variant="outlined"
              InputProps={{ style: inputStyle }}
              {...register("cpi", {
                required: true ? "CPI should be filled" : "",
              })}
              error={!!errors["cpi"]}
              helperText={errors["cpi"] ? errors["cpi"].message : ""}
            />
          </Grid>
          <Grid container >
            <Grid item xs={5} mb={5}>
              <Typography sx={{ fontSize: "17px" }}>Can Students with backlogs apply ?</Typography>
              </Grid>
            <Grid item xs={2}>
              <FormControl marginTop="15px">
                <RadioGroup name="backlogsAllowed" aria-labelledby="id1" row {...register("backlogsAllowed")}>
                  <FormControlLabel
                    control={<Radio />}
                    label="Yes"
                    value="Yes"
                  />
                  <FormControlLabel control={<Radio />} label="No" value="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {watch("backlogsAllowed") === "Yes" && (
    <>
      <Grid item>
        <Typography sx={{ fontSize: "17px" }}>No. of backlogs:</Typography>
      </Grid>
      <Grid item>
        <TextField
          name={"numberofbacklogs"}
          placeholder="Text"
          variant="outlined"
          InputProps={{ style: inputStyle4 }}
          {...register("numberofbacklogs")}
        />
      </Grid>
    </>
  )}

          </Grid>
          <Grid container >
            <Grid item xs={5} mb={5} >
              <Typography sx={{ fontSize: "17px" }}>Can students of older batches (not 2024)apply?</ Typography>
              </Grid>
            <Grid item xs={3}>
              <FormControl marginTop="15px">
                <RadioGroup name="bond" aria-labelledby="id1" row {...register("bond")}>
                  <FormControlLabel
                    control={<Radio />}
                    label="Yes"
                    value="Yes"
                  />
                  <FormControlLabel control={<Radio />} label="No" value="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Grid item>
            <Typography variant="h4" className={classes.title}>
              Any Other Criteria
            </Typography>
            <TextField
              label="Text"
              multiline
              variant="outlined"
              InputProps={{ style: inputStyle1 }}
              {...register("additionalCriteria")}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.savechangesButton}
              sx={{ backgroundColor: "blue" }}
              onClick={handle}
            >
              Save Changes{" "}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.nextButton}
              disabled={T}
              onClick={handlebutton2}
              type="submit"
            >
              {" "}
              Save & Next
            </Button>{" "}
          </Grid>
          <br />
        </form>
        <DevTool control={control} />
      </Stack>
      <Divider />
      <br />
      <ButtonGroup1
        T={T}
        onEC={handlebutton}
        onJD={handlebutton1}
        onSP={handlebutton3}
        onPD={handlebutton2}
      />
    </Stack>
  );
};
export default Recruiter_EC;
