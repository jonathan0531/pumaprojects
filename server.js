const sql = require("mssql");

// Create connection to database
const databaseConfig = {
  userName: "user2",
  password: "password_2",
  server: "COT-CIS4375-02",
  database: "PumaProjects"
  //   options: {
  //     encrypt: true // Use this if you're on Windows Azure
  //   }
};

// mssql connect for database

sql.connect(databaseConfig, err => {
  // ... error checks

  if (err) {
    console.log("error: " + err);
  } else {
    console.log("conencted");
  }
  // Query

  new sql.Request().query("select 1 as number", (err, result) => {
    // ... error checks

    console.dir(result + " hmmm ... not good");
  });
});
