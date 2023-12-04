import * as React from "react";
import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import SetupPageBuilder from "../../../components/SetupPageBuilder";
import { useContext } from "react";
import { userDataContext } from "../../../hooks/userDataContext";

const AccountSetupPage = () => {
  const context = useContext(userDataContext);

  return (
    <OrangeBackground>
      <SetupPageBuilder
        title={"Hello, pet lover"}
        description={"Tell us more about you"}
        inputFields={[
          { fieldName: "FirstName", placeholder: "First Name", type: "text" },
          { fieldName: "LastName", placeholder: "Last Name", type: "text" },
        ]}
        multipleChoice={[]}
        pageRouteTo="/accountSetup/2"
        onSubmit={(formProps) => {
          context.setFirstName(formProps.FirstName as string);
        }}
      ></SetupPageBuilder>
    </OrangeBackground>
  );
};

export default AccountSetupPage;
