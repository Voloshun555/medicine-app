
import { Suspense } from "react";
import { Heder } from "../heder/heder"
// import s from "./layout.module.scss"
import { Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <>
      <Heder />
      <main>
        <Suspense fallback="Завантаження...">
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
