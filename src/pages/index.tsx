import { Box } from "@mantine/core";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@app/layout";

export const Router = () => {
  return (
    <Box>
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Layout />} />
      </Routes>
    </Box>
  );
};
