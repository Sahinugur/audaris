import CustomerInfo from "../models/customers.js";

//GET CUSTOMER
export const getCustomers = async (req, res) => {
  try {
    const CustomerDetails = await CustomerInfo.find();
    console.log(CustomerDetails);
    res.status(200).json(CustomerDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//CREATE CUSTOMER

export const createCustomer = async (req, res) => {
  const customer = req.body;
  const newCustomer = new CustomerInfo(customer);
  try {
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

//DELETE CUSTOMER

export const deleteCustomer = async (req, res) => {
  //const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(caughtID)) {
    return res.status(404).send("No post with that id");
  }
  await CustomerInfo.findByIdAndRemove(caughtID);

  res.json({ message: "Post deleted successfully" });
};
