import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  intnr: String,
  type: String,
  contact_persons: [
    {
      first_name: String,
      last_name: String,
      email: String,
      mobile_phone: String,
      birth_date: String,
    },
  ],
  addresses: [
    {
      company_name: String,
      country: String,
      city: String,
      zip: String,
      fax: String,
      phone: String,
      street: String,
      email: String,
    },
  ],
});

const CustomerInfo = mongoose.model("CustomerInfo", customerSchema);

export default CustomerInfo;
