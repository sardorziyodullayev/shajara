import { Router } from "@pages/index";
import { withProviders } from "./providers";

const _Root = () => {
  return <Router />;
};

export const Root = withProviders(_Root);
