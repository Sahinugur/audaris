console.log("app started.");

/*  body: JSON.stringify({ email: email, password: password }),
headers: {
  "Content-Type": "application/json",
}, */
fetch("http://localhost:5000/home/customers")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let output = `
    <thead>
        <tr>
            <th>#</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Company name</th>
            <th>Country</th>
            <th>Zip/City</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>`;
    data.map(
      (customer) =>
        (output += `
        <tr class="active-row">
            <td>${customer.intnr}</td>
            <td>${customer.contact_persons[0].first_name}</td>
            <td>${customer.contact_persons[0].last_name}</td>
            <td>${customer.addresses[0].company_name}</td>
            <td>${customer.addresses[0].country}</td>
            <td>${customer.addresses[0].zip}/${customer.addresses[0].city}</td>
            <td>${customer.addresses[0].street}</td>
            <td>
                <button data-customerId=${customer._id} class="edit-btn">Edit</button>
                <button data-customerId=${customer._id} onclick="DeleteCustomer(this)" class="del-btn">Del</button>
                
            </td>
            
        </tr>
        
    
    `)
    );

    document.querySelector("#customers").innerHTML = output;
  });

function DeleteCustomer(elem) {
  var caughtID = $(elem).data("customerId");

  fetch("http://localhost:5000/home/customers", {
    method: "POST",
    body: JSON.stringify({ caughtID: caughtID }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
