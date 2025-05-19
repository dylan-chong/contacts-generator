const { faker } = require("@faker-js/faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// Number of records to generate
const numRecords = 500;

// Create CSV writer
const csvWriter = createCsvWriter({
  path: "fake_contacts.csv",
  header: [
    { id: "firstName", title: "First Name" },
    { id: "lastName", title: "Last Name" },
    { id: "companyName", title: "Company name" },
    { id: "phoneNumber", title: "Phone Number - Work" }
  ]
});

// Generate fake data
const records = Array.from({ length: numRecords }, () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  companyName: "Generated",
  phoneNumber: faker.phone.number()
}));

// Write to CSV file
csvWriter.writeRecords(records)
  .then(() => {
    console.log(`Generated ${numRecords} fake contact records in fake_contacts.csv`);
  })
  .catch(error => {
    console.error("Error writing CSV file:", error);
  });
