import React, { useState } from "react";
import { Modal, Box, IconButton, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CardProject = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      projectUrl: "https://heri-hermansyah.vercel.app/",
      codeUrl: "https://github.com/herihermansyah/portfolio",
      status: "Responsive Design",
    },
    {
      id: 2,
      title: "Multipage",
      projectUrl: "https://multi-page-three.vercel.app/",
      codeUrl: "https://github.com/herihermansyah/multi-page",
      status: "Desktop Only",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full h-90 rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleOpen(project)}
          >
            {/* Thumbnail (iframe preview) */}
            <iframe
              src={project.projectUrl}
              title={project.title}
              className="w-full h-full pointer-events-none"
              style={{
                border: "none",
                overflow: "hidden",
              }}
            />

            <div className="absolute inset-0 bg-black/70"></div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Typography
                variant="h6"
                className="text-white font-bold text-xl drop-shadow-lg"
              >
                {project.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "5%",
            width: "90%",
            height: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {selectedProject && (
            <>
              {/* Live Preview */}
              <Box sx={{ flex: 1, border: "1px solid #ddd", borderRadius: 1 }}>
                <iframe
                  src={selectedProject.projectUrl}
                  title={selectedProject.title}
                  width="100%"
                  height="100%"
                  style={{ border: "none", borderRadius: "8px" }}
                />
              </Box>

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href={selectedProject.codeUrl}
                  target="_blank"
                >
                  View Code
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href={selectedProject.projectUrl}
                  target="_blank"
                >
                  View Live Project
                </Button>
              </Box>
            </>
          )}
          {selectedProject && (
            <Typography sx={{fontSize:"18px", fontWeight:"bold"}} variant="body2">{selectedProject.status}</Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default CardProject;
