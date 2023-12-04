import { type HTMLInputTypeAttribute } from "react";
import { SetupPageBuilder } from "./SetupPageBuilder";

export type pageDataSchema = {
  title: string;
  description: string;
  inputFields: {
    fieldName: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
  }[];
  multipleChoice: string[];
  pageRouteTo: string;
  onSubmit: ((formProps: { [k: string]: FormDataEntryValue }) => void) | null;
};

export default SetupPageBuilder;
