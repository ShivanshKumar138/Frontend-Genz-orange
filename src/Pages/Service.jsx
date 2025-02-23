import Mobile from "../Components/Mobile";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Container,
  } from "@mui/material";
  import HomeIcon from "@mui/icons-material/Home";
  import LockIcon from "@mui/icons-material/Lock";
  import AccountBoxIcon from "@mui/icons-material/AccountBox";
  import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
  import SupportAgentIcon from "@mui/icons-material/SupportAgent";
  import LanguageIcon from "@mui/icons-material/Language";


  const services = [
    { icon: <LockIcon color="primary" />, text: "Change ID Login Password" },
    { icon: <AccountBoxIcon color="primary" />, text: "Retrieve Login ID Account" },
    { icon: <SportsEsportsIcon color="primary" />, text: "Game Problems" },
    { icon: <SupportAgentIcon sx={{ color: "red" }} />, text: "Online service" },
  ];
  


const Service = () => {
  return (
    <>
    <Mobile>
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "orange", boxShadow: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton edge="start" color="inherit">
            <HomeIcon sx={{ color: "black" }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            Self Service Center
          </Typography>
          <IconButton>
            <LanguageIcon sx={{ color: "black" }} />
            <Typography variant="body2" sx={{ ml: 1, color: "black" }}>
              English
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Banner */}
      <Box
        sx={{
          backgroundColor:"orange",
          backgroundSize: "cover",
          textAlign: "center",
          padding: "20px",
          color: "white",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Welcome to Consult the GOAGAMES Self-Service Center!
        </Typography>
        <Typography sx={{ mt: 1 }}>www.goagame.me</Typography>
      </Box>

      {/* Self Service Section */}
      <Container sx={{ mt: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Self Service
        </Typography>
        <List sx={{ backgroundColor: "white", borderRadius: "8px", boxShadow: 1 }}>
          {services.map((service, index) => (
            <ListItem key={index} button divider={index !== services.length - 1}>
              <ListItemIcon>{service.icon}</ListItemIcon>
              <ListItemText primary={service.text} />
            </ListItem>
          ))}
        </List>
      </Container>

      {/* Footer Section */}
      <Container sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Kind tips
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
          1. Please select the relevant query and submit it for review. After successful submission,
          the customer service specialist will handle it for you immediately.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "orange",
            color: "white",
            borderRadius: "30px",
            mt: 2,
            px: 5,
          }}
        >
          Progress query
        </Button>
      </Container>
    </Box>
    </Mobile>
    </>
  )
}

export default Service