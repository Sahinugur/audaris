import express from "express";
import {
  getCustomers,
  createCustomer,
  deleteCustomer,
} from "../controllers/customers.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.post("/", createCustomer);
router.get("/customers", deleteCustomer);

export default router;
