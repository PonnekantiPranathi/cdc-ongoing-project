import {
  Typography,
  TextField,
  IconButton,
  Box,
  Stack,
  Grid,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormGroup,
  MenuItem,
  Divider,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ClearIcon from "@mui/icons-material/Clear";
import ButtonGroup3 from "../../../global-components/ButtonGroup3";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { SP_TYPE } from "../../../Redux/SP/SPTypes";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Controller } from "react-hook-form";


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
    "& input": {
      backgroundColor: "#FFFFFF",
    },
  },
  title: { fontSize: "16px", color: "#6F7492" },
}));

export default function SelectionProcess({
  onclose,
  onButton,
  onButton1,
  onButton2,
  onButton3,
  jobId,
  Role,
}) {

  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;
  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch(`/recruiter/job/updateSelection/${jobId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

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

  const [T, setT] = useState(true);
  const handle = () => {
    setT(false);
  };

  const classes = useStyles();
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

  const dispatch = useDispatch();

  return (
    <>
      <Stack
        direction={"column"}
        mt={{ md: "6.73vh", sm: "12.81vh" }}
        ml={{ md: "14.4vw", sm: "5.81vw" }}
        height={{ md: "86.53vh", sm: "76.53vh" }}
        width={{ md: "71.875vw", sm: "85.5vw" }}
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
            marginTop: "-25px",
            marginBottom: "10px",
          }}
        >
          Selection Process
        </Grid>
        <Stack
          height={{ md: "53.24vh", sm: "64.24vh" }}
          sx={{
            overflow: "scroll",
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": { width: "12px", height: "1px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#1E53D740",
              borderRadius: "6px",
              width: "2px",
            },
          }}
        >
           <form action="#" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <Grid container>
            <Box width="733px"></Box>
          </Grid>

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="15px">
              <Typography sx={{ fontSize: "17px" }}>
                Application Deadline
              </Typography>
            </Grid>
            <Grid item xs={6}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
      name="applicationDeadline"
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          className={classes.datePicker}
          inputProps={{
            name: "applicationDeadline",
          }}
        />
      )}
      rules={{ required: "Application Deadline is required" }}
    />
  </LocalizationProvider>
</Grid>
          </Grid>

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="15px">
              <Typography sx={{ fontSize: "17px" }}>PPT:</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl marginTop="15px">
                <RadioGroup name="ppt" aria-labelledby="id1" row {...register("ppt", { required: "Please select Yes or No for PPT" })}>
                  <FormControlLabel
                    control={<Radio />}
                    label="Yes"
                    value="Yes"
                  />
                  <FormControlLabel control={<Radio />} label="No" value="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
      name="pptDate"
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          className={classes.datePicker}
          inputProps={{
            name: "pptDate",
          }}
        />
      )}
      rules={{ required: "PPT Date is required" }}
    />
  </LocalizationProvider>
</Grid>
          </Grid>

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="15px">
              <Typography sx={{ fontSize: "17px" }}>
                Resume Shortlisting:
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl marginTop="15px">
              <RadioGroup name="resumeShortlisting" aria-labelledby="id1" row {...register("resumeShortlisting", { required: "Please select Yes or No for resumeShortlisting" })}>
                  <FormControlLabel
                    control={<Radio />}
                    label="Yes"
                    value="Yes"
                  />
                  <FormControlLabel control={<Radio />} label="No" value="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
      name="resumeShortlistingDate"
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          className={classes.datePicker}
          inputProps={{
            name: "resumeShortlisting",
          }}
        />
      )}
      rules={{ required: "ResumeShortlisting Date is required" }}
    />
  </LocalizationProvider>
  </Grid>
          </Grid>

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="8px">
              <Typography sx={{ fontSize: "17px" }}>Written Test</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl>
              <RadioGroup name="writtenTest" aria-labelledby="id1" row {...register("writtenTest", { required: "Please select Yes or No for writtenTest" })}>
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

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="8px">
              <Typography sx={{ fontSize: "17px" }}>Test Type:</Typography>
            </Grid>
            <Grid item xs>
              <FormControl>
                <FormGroup row name="Checkbox-group" aria-labelledby="id2">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Technical"
                    value="Technical"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Aptitude"
                    value="Aptitude"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Case Study"
                    value="Case Study"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Others"
                    value="Others"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="8px">
              <Typography sx={{ fontSize: "17px" }}>
                Test Description
              </Typography>
            </Grid>
            <Grid item>
              <TextField variant="outlined" label="Text" {...register("testDescription", {
                  required: true ? "Test Description should be filed" : "",
                })}
                error={!!errors["testDescription"]}
                helperText={errors["testDescription"] ? errors["testDescription"].message : ''}></TextField>
            </Grid>
          </Grid>

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="8px">
              <Typography sx={{ fontSize: "17px" }}>
                Group Discussion
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl>
              <RadioGroup name="groupDiscussion" aria-labelledby="id1" row {...register("groupDiscussion", { required: "Please select Yes or No for Group Discussion" })}>{" "}            
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

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="8px">
              <Typography sx={{ fontSize: "17px" }}>Interview</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl>
              <RadioGroup name="interview" aria-labelledby="id1" row {...register("interview", { required: "Please select Yes or No for Interview" })}>
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

          <Grid container marginTop="10px">
            <Grid item xs={4} marginTop="15px">
              <Typography sx={{ fontSize: "17px" }}>
                Expected Number Of Rounds:
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                select
                fullWidth              {...register("interviewDescription")}>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="8px">
              <Typography sx={{ fontSize: "17px" }}>Interview Type:</Typography>
            </Grid>
            <Grid item xs>
              <FormControl>
                <FormGroup row name="Checkbox-group" aria-labelledby="id2">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Technical"
                    value="Technical"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Aptitude"
                    value="Aptitude"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="HR"
                    value="HR"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Others"
                    value="Others"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container marginTop="10px">
            <Grid item xs={3} marginTop="8px">
              <Typography sx={{ fontSize: "17px" }}>
                Interview Description
              </Typography>
            </Grid>
            <Grid item>
              <TextField variant="outlined" label="Text"                 {...register("interviewDescription", {
                  required: true ? "interviewDescription should be filed" : "",
                })}
                error={!!errors["interviewDescription"]}
                helperText={errors["interviewDescription"] ? errors["interviewDescription"].message : ''}></TextField>
            </Grid>
            <Box height={143}></Box>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.savechangesButton}
              sx={{ backgroundColor: "blue" }}
              onClick={handle}
            >
              {" "}
              Save Changes
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={T}
              className={classes.nextButton}
              onClick={handleFormSubmit}
              type="submit"
            >
              {" "}
              Submit
            </Button>
          </Grid>
          <br />
          <br />
          </form>
          <DevTool control={control}/>
        </Stack>
        <Divider />
        <br />
        <ButtonGroup3
          onEC={handlebutton}
          onJD={handlebutton1}
          onPD={handlebutton2}
          onSP={handlebutton3}
        />
      </Stack>
    </>
  );
}
