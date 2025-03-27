import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  IconButton,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const JoinUsForm = ({ closeForm }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    joinAs: "Volunteer",
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Form Fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp Number is required";
    } else if (!/^\d{10}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Enter a valid 10-digit phone number";
    }
    return newErrors;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          formRef.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setOpenSnackbar(true);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              whatsapp: "",
              joinAs: "Volunteer",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <Card>
        <CardContent>
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 3,
            }}
          >
            <Typography variant="h5" component="h2" fontWeight="bold">
              Join Us
            </Typography>
            <IconButton aria-label="close" onClick={closeForm}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Form Fields */}
          <Box
            component="form"
            ref={formRef}
            noValidate
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  required
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  required
                />
              </Grid>

              {/* Email ID */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Id"
                  name="email"
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                />
              </Grid>

              {/* WhatsApp Number */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="WhatsApp Number"
                  name="whatsapp"
                  variant="outlined"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  error={!!errors.whatsapp}
                  helperText={errors.whatsapp}
                  required
                />
              </Grid>

              {/* Radio Group */}
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Wants to join as</FormLabel>
                  <RadioGroup
                    row
                    aria-label="join-options"
                    name="joinAs"
                    value={formData.joinAs}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Volunteer"
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": { color: "black" },
                          }}
                        />
                      }
                      label="Volunteer"
                    />
                    <FormControlLabel
                      value="Member"
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": { color: "black" },
                          }}
                        />
                      }
                      label="Member"
                    />
                    <FormControlLabel
                      value="Donate"
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": { color: "black" },
                          }}
                        />
                      }
                      label="Donate"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  sx={{
                    mt: 2,
                    background: "#23922B",
                    pt: 1.5,
                    pb: 1.5,
                    pl: 3,
                    pr: 3,
                    color: "white",
                  }}
                >
                  Send message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default JoinUsForm;
