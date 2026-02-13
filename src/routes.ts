import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PaymentGatewayPage } from "./components/payment-gateway/PaymentGatewayPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/payment-gateway",
    Component: PaymentGatewayPage,
  },
]);
