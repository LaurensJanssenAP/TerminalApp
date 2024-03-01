import * as readline from "readline-sync";
import personData from "./json/person.json";
import countryData from "./json/country.json";
import { Country, Person } from "./interface";

const persons: Person[] = personData;
const countries: Country[] = countryData;
let again: boolean = true;

function nameCard(person: Person) {
  console.log(`${person.name} (${person.id})`);
}

function filterById(id: string) {
  let filterId: Person | undefined;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id == id) {
      filterId = persons[i];
    }
  }
  console.log(filterId);
}
do {
  console.log("Welcome to the JSON data viewer!");
  console.log("");
  console.log("1. View all data");
  console.log("2. Filter by ID");
  console.log("3. Exit");
  console.log("");
  let input: number = readline.questionInt("Please enter your choice: ");

  if (input == 1) {
    for (let i = 0; i < persons.length; i++) {
      nameCard(persons[i]);
    }
  } else if (input == 2) {
    let id: string = readline.question(
      "Please enter the ID you want to filter by: "
    );
    filterById(id);
  } else if (input == 3) {
    console.clear();
    console.log("Exiting now.");
    again = false;
  } else {
    console.clear();
    console.log("Not an available choice!");
  }
} while (again);
