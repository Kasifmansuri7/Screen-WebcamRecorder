import React, { useContext, useEffect } from "react";
import { UserContext } from "../userContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { user, ready } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && ready) {
      navigate("/login");
    }
  }, [user]);
}
