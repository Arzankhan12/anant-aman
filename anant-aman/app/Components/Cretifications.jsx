"use client";
import { useState } from "react";
import { Modal, Box, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ig from "../assets/bgimg.png";

const certifications = [
  ig,
  ig,
  ig,
  ig,
  ig,
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box id="certifications" sx={{ textAlign: "center", background: "#132B77", py: { sm: 8, lg: 12 } }}>
      <Typography variant="h3" color="white" mb={3} sx={{ fontWeight: "bold" }}>
        Certifications
      </Typography>

      <Grid container spacing={3} py={2} justifyContent="center">
        {certifications.map((cert, index) => (
          <Grid item key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}  // Image zoom effect on hover
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Box
                sx={{
                  width: { lg:200 , md:150 , sm:120 , xs: 120 },
                  height: { lg:200 , md:150 , sm:120 , xs: 120 },
                  borderRadius: "50%",
                  cursor: "pointer",
                  overflow: "hidden",
                  display : "flex",
                  justifyContent : 'center',
                  alignItems : 'center'
                }}
                onClick={() => handleOpen(cert)}
              >
                <Image
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  sx={{
                    width: { lg:200 , md:150 ,},
                    height: { lg:200 , md:150 ,},
                  }}
                  style={{ borderRadius: "50px" }}
                  priority
                />
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            maxWidth: "90%", // For responsive modal width
            maxHeight: "80vh", // For responsive modal height
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "black",
              zIndex: 10,  // Ensure it is above the image
            }}
          >
            <CloseIcon sx={{color:"white"}}/>
          </IconButton>

          <Image
            src={selectedImage}
            alt="Certificate"
            width={500}
            height={350}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </motion.div>
      </Modal>
    </Box>
  );
};

export default Certifications;
