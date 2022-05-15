import { ContentContext } from "@/context/ContextProvider";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Link to={"/home"}>Login </Link>
    </div>
  );
}
