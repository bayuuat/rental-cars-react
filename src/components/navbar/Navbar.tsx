import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import Cookies from "js-cookie";

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const accessToken = Cookies.get("userauth");
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("userauth");
    navigate("/login");
  };

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="#"
        className="hover:text-primary text-sm font-medium transition-colors"
      >
        Overview
      </Link>
      <Link
        to="#"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Customers
      </Link>
      <Link
        to="#"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Products
      </Link>
      <Link
        to="#"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Settings
      </Link>
      {accessToken ? (
        <>
          <Button
            size={"sm"}
            variant={"secondary"}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Button>
          <Button size={"sm"} variant={"destructive"} onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            size={"sm"}
            variant={"secondary"}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </>
      )}
    </nav>
  );
}
