import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Admin() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true),
    );
  }, []);

  return (
    <>
      <div className="flex h-full w-full">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        {/* Navbar & Main Content */}
        <div className="bg-lightPrimary dark:!bg-navy-900 h-full w-full">
          {/* Main Content */}
          <main
            className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
          >
            {/* Routes */}
            <div className="h-full">
              <div className="mx-auto mb-auto mt-16 h-full min-h-[84vh] p-2 md:pr-2">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
