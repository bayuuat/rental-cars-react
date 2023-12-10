import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Chrome, Facebook, Github, Loader } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ApiError } from "@/types/ApiError";
import { useGoogleLogin } from "@react-oauth/google";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface FormValues {
  email: string;
  password: string;
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    flow: "auth-code",
    ux_mode: "redirect",
    redirect_uri: "/auth/google",
    state: "g_token",
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      const login = await axiosClient.post("/api/login", data);
      return login;
    },
    onSuccess: (data) => {
      const token = data.data.token;
      const decoded = jwtDecode(token);

      const expirationDate = new Date((decoded.exp ?? 0) * 1000);
      Cookies.set("userauth", token, { expires: expirationDate });
      navigate("/");
    },
    onError: (error: ApiError) => {
      const response = error?.response;

      if (response?.data.message) {
        toast({
          variant: "destructive",
          title: response?.data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Service error! Please try again.",
        });
      }
    },
  });

  const onSubmit = async (data: FormValues) => {
    mutateAsync(data);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <Input
                  id="email"
                  placeholder="Your email here..."
                  type="email"
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  disabled={isPending}
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="mb-2 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <Input
                  id="password"
                  placeholder="Your password here..."
                  type="password"
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  disabled={isPending}
                  {...field}
                />
              )}
            />
            {errors.password && (
              <p className="mb-2 text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background text-muted-foreground px-2">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          type="button"
          onClick={() => loginGoogle()}
          disabled={isPending}
        >
          {isPending ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Chrome className="mr-2 h-4 w-4" />
          )}
          Google
        </Button>
        <Button variant="outline" type="button" disabled={isPending}>
          {isPending ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Github className="mr-2 h-4 w-4" />
          )}
          Github
        </Button>
        <Button variant="outline" type="button" disabled={isPending}>
          {isPending ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Facebook className="mr-2 h-4 w-4" />
          )}
          Facebook
        </Button>
      </div>
    </div>
  );
}
