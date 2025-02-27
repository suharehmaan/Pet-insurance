// import React from "react";
// import { Box, Grid, Paper, Typography } from "@mui/material";
// import PolicyCard from "../pages/PolicyCard";
// import QuickActions from "../pages/QuickActions";
// import ClaimsTable from "../pages/ClaimsTable";
// import Insights from "../pages/Insights";

// const Dashboard = () => {
//   return (
//     <Box sx={{ padding: 3 }}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <PolicyCard />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <QuickActions />
//           <ClaimsTable />
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Insights />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;
import React from "react";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <h2>Welcome to Your Dashboard</h2>
      <p>Here you can view your claim table, insights, and policy card details.</p>
    </Box>
  );
};

export default Dashboard;