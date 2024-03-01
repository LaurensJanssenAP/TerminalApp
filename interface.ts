export interface Person {
  id: string;
  name: string;
  description: string;
  age: number;
  isAlive: boolean;
  birthdate: string;
  imageUrl: string;
  type: string;
  skills: string[];
  country: Country;
}

export interface Country {
  id: string;
  name: string;
}
