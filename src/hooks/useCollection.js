import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import {collection, onSnapshot, query, where } from "@firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);
  const q = useRef(_q).current;
  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }
  }, [c, q]);

  return { documents };
};
