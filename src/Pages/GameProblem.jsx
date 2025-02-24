import Mobile from "../Components/Mobile";
import {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    TextField,
    Button,
    Box,
    Container,
    Grid,
  } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";  

const GameProblem = () => {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigate=useNavigate();
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };
  return (
    <Mobile>
         <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "orange", boxShadow: 1 }}>
        <Toolbar>
          <IconButton edge="start">
            <ArrowBackIcon sx={{ color: "black" }} onClick={()=>navigate(-1)}/>
          </IconButton>
          <Typography
            variant="h6"
            sx={{ color: "black", fontWeight: "bold", flexGrow: 1, textAlign: "center" }}
          >
            Game Problems
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Form Section */}
      <Container sx={{ mt: 3 }}>
        {/* Description Field */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Explain the issue happen to you inside the game clear and detail
          </Typography>
          <TextField
            multiline
            rows={5}
            fullWidth
            placeholder="Please enter content"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ backgroundColor: "white", mt: 1 }}
          />
          <Typography variant="body2" sx={{ textAlign: "right", color: "#666" }}>
            {description.length}/500
          </Typography>
        </Box>

        {/* ID GOAGAMES Field */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            ID GOAGAMES <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            placeholder="Please enter username"
            variant="outlined"
            sx={{ backgroundColor: "white", mt: 1 }}
          />
        </Box>

        {/* Image Upload */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Attach photo / screenshot issue clearly
          </Typography>
          <Grid
            container
            sx={{
              width: 100,
              height: 100,
              backgroundColor: "white",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "1px dashed #aaa",
              mt: 1,
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="upload-receipt"
            />
            <label htmlFor="upload-receipt">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#aaa",
                  }}
                >
                  <CloudUploadIcon fontSize="large" />
                  <Typography variant="body2">photo</Typography>
                </Box>
              )}
            </label>
          </Grid>
        </Box>

        {/* Confirm Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "orange",
            color: "white",
            borderRadius: "30px",
            mt: 4,
            py: 1.5,
            fontSize: "16px",
          }}
        >
          Confirm
        </Button>
      </Container>
    </Box>
    </Mobile>
  )
}

export default GameProblem