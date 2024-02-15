// JobDescription.jsx
import React, { useEffect, useState } from 'react';
import {Grid} from '@mui/material';

const JobDescription = () => {
  const [jobDescriptions, setJobDescriptions] = useState([]);

  useEffect(() => {
    const fetchJobDescriptions = async () => {
      try {
        const response = await fetch('/recruiter/getJobs');
        if (response.ok) {
          const data = await response.json();
          setJobDescriptions(data.map((job) => job.description));
        } else {
          console.error('Failed to fetch job descriptions');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchJobDescriptions();
  }, []);

  return (
    <Grid item xs={12} md={8} sm={12} width={{md:'82.5vw'}} justifyContent={"center"}alignItems={"center"}position={"absolute"}left={{ md: '10vw', sm: '4.37vw',xs:'3.75vw'}} marginTop={{ md: '-93vh', sm:'12.8vh',xs:'10.8vh' }}>
      <h2>Job Descriptions</h2>
      {jobDescriptions.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </Grid>
  );
};

export default JobDescription;
