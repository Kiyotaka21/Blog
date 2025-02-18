import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../shared/routes";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useSelector((s: RootState) => s.user.jwt);
  if (!jwt) {
    return <Navigate to={ROUTER_PATH.LOGIN} replace />;
  }
  return children;
};
