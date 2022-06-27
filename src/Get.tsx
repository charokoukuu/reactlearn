
import axios, { AxiosResponse } from "axios";

// モックサーバーのURL　db.json
const membersUrl = "https://mocaff.net/order";

type Member = {
  id: number;
  title: string;
  price: number;
};

 