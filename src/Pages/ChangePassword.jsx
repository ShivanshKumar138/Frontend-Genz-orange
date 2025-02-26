import React from 'react';
import Mobile from '../Components/Mobile';
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
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [images, setImages] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (event, field) => {
      const file = event.target.files[0];
      if (file) {
          setImages((prev) => ({ ...prev, [field]: file })); // Store File, NOT URL
      }
  };

  const handleSubmit = async () => {
      const formData = new FormData();
      formData.append("newPassword", newPassword);
      formData.append("username", username);
      Object.values(images).forEach((file) => {
        if (file) formData.append("files", file);
    });

      try {
          const response = await fetch("http://localhost:4003/change/", {
              method: "PUT",
              body: formData,
          });

          const data = await response.json();
          if (response) {
              console.log(data);
              alert("Password changed successfully!");
              navigate(-1);
          } else {
              alert(`Error: ${data.msg}`);
          }
      } catch (error) {
          console.error("Error uploading data:", error);
      }
  };

  return (
      <Mobile>
          <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
              <AppBar position="static" sx={{ backgroundColor: "orange", boxShadow: 1 }}>
                  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                      <IconButton edge="start">
                          <ArrowBackIcon sx={{ color: "black" }} onClick={() => navigate(-1)} />
                      </IconButton>
                      <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
                          Change ID Login Password
                      </Typography>
                      <IconButton>
                          <HelpOutlineIcon sx={{ color: "black" }} />
                      </IconButton>
                  </Toolbar>
              </AppBar>

              <Container sx={{ mt: 3 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                      New Password <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                      fullWidth
                      placeholder="Enter new password"
                      type="password"
                      variant="outlined"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      sx={{ backgroundColor: "white", mt: 1, mb: 2 }}
                  />

                  <Typography variant="subtitle1" fontWeight="bold">
                      ID Account GOAGAMES <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                      fullWidth
                      placeholder="Enter username"
                      variant="outlined"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      sx={{ backgroundColor: "white", mt: 1, mb: 2 }}
                  />

                  {/* Image Upload Fields */}
                  {[
                      "Latest Deposit Receipt Proof",
                      "Photo Selfie Hold Identity Card",
                      "Photo Selfie Hold Passbook Bank",
                  ].map((label, index) => (
                      <Box key={index} sx={{ mt: 2 }}>
                          <Typography variant="subtitle1" fontWeight="bold">
                              {label} <span style={{ color: "red" }}>*</span>
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
                                  onChange={(e) => handleImageChange(e, label)}
                                  style={{ display: "none" }}
                                  id={`upload-${index}`}
                              />
                              <label htmlFor={`upload-${index}`}>
                                  {images[label] ? (
                                      <img
                                          src={URL.createObjectURL(images[label])}
                                          alt="Uploaded"
                                          style={{
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover",
                                              borderRadius: "8px",
                                          }}
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
                                          <Typography variant="body2">Upload photo</Typography>
                                      </Box>
                                  )}
                              </label>
                          </Grid>
                      </Box>
                  ))}

                  {/* Confirm Button */}
                  <Button
                      fullWidth
                      variant="contained"
                      onClick={handleSubmit}
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
  );
};

export default ChangePassword;
