import React from 'react';
import './MainContent.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CommentBox from './CommentBox';
import SideBar from '../SideBar/SideBar';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainContent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={{ padding: "20px 0" }}>
        <TabPanel value={value} index={0}>
          <CommentBox></CommentBox>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SideBar></SideBar>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CommentBox></CommentBox>
        </TabPanel>
      </Box>
    </Box>
  );
}

MainContent.propTypes = {};

MainContent.defaultProps = {};
