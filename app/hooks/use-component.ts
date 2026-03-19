"use client";

import {  useState } from "react";

export const useSubcribeByType = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
  
    return { isSubscribed, setIsSubscribed };
};