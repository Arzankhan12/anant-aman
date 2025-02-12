// JoinUsForm.js
import React from "react";
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const JoinUsForm = ({ closeForm }) => {
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

          {/* Description */}
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspen varius
            enim in eros elementum tristique.
          </Typography>

          {/* Form Fields */}
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Email ID */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Id"
                  variant="outlined"
                  type="email"
                  required
                />
              </Grid>

              {/* WhatsApp Number */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="WhatsApp Number"
                  variant="outlined"
                  type="tel"
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
                    name="joinOptions"
                    defaultValue="Volunteer"
                  >
                    <FormControlLabel
                      value="Volunteer"
                      control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />}
                      label="Volunteer"
                    />
                    <FormControlLabel
                      value="Member"
                      control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />}
                      label="Member"
                    />
                    <FormControlLabel
                      value="Donate"
                      control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />}
                      label="Donate"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ mt: 2 , background: "#23922B" , pt: 1.5, pb: 1.5, pl: 3, pr: 3, color: "white" }}
                >
                  Send message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JoinUsForm;
