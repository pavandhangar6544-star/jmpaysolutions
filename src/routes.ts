import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PaymentGatewayPage } from "./components/payment-gateway/PaymentGatewayPage";
import { BBPSPage } from "./components/bbps/BBPSPage";
import { GRCPage } from "./components/grc/GRCPage";
import { LMSPage } from "./components/lms/LMSPage";
import { VisitorManagementPage } from "./components/visitor-management/VisitorManagementPage";
import { WebDevPage } from "./components/web-dev/WebDevPage";
import { MobileAppPage } from "./components/mobile-app/MobileAppPage";
import { CustomSoftwarePage } from "./components/custom-software/CustomSoftwarePage";
import { CloudServicesPage } from "./components/cloud-services/CloudServicesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/payment-gateway",
    Component: PaymentGatewayPage,
  },
  {
    path: "/bbps",
    Component: BBPSPage,
  },
  {
    path: "/grc",
    Component: GRCPage,
  },
  {
    path: "/lms",
    Component: LMSPage,
  },
  {
    path: "/visitor-management",
    Component: VisitorManagementPage,
  },
  {
    path: "/web-dev",
    Component: WebDevPage,
  },
  {
    path: "/mobile-dev",
    Component: MobileAppPage,
  },
  {
    path: "/custom-software",
    Component: CustomSoftwarePage,
  },
  {
    path: "/cloud-services",
    Component: CloudServicesPage,
  },
]);
