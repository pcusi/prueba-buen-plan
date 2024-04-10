import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

export type RootModuleProps = {};

export const RootModule: FC<RootModuleProps> = ({}: RootModuleProps) => {
  return (
    <>
      <Outlet />
      <Navigate to="/calendar" replace={true} />
    </>
  );
};
