import { Airtable } from "./Airtable"

export interface Menu extends Airtable {
  "fields": {
    "name": string;
    "description": string;
    "price": number;
    "menu": [string];
    "allergens": string;
  }
}