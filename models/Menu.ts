import { Attachment } from "airtable";
import { Airtable } from "./Airtable"

export interface Menu extends Airtable {
  "fields": {
    "cocktails": string[];
    "name": string;
    "description": string;
    "attachments": Attachment
  }
}