import axios from "axios";
import { useEffect, useState } from "react";
import { DataProps } from "../App";


export async function getArticals(): Promise<DataProps[]> {
  try {

    const url = "https://mocaff.net/order";
    const response = await axios.get<DataProps[]>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return []
  }
}
