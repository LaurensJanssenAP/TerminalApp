import personData from "./json/person.json";
import countryData from "./json/country.json";
import { Country, Person } from "./interface";
import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);

app.use(express.static("public"));

const persons: Person[] = personData;
const countries: Country[] = countryData;

app.get("/", (req, res) => {
  res.render("index", { personData: personData });
});

app.listen(app.get("port"), async () => {
  console.log("[server] http://localhost:" + app.get("port"));
});
