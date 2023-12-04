import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import SetupPageBuilder from "../../../components/SetupPageBuilder";

const AccountSetupPage = () => {
  return (
    <OrangeBackground>
      <SetupPageBuilder
        title={"Set up your pet's profile"}
        description={""}
        inputFields={[
          {
            fieldName: "dogAmount",
            placeholder: "How many dogs do you have?",
            type: "number",
          },
        ]}
        multipleChoice={[]}
        pageRouteTo={"/accountSetup/3"}
        onSubmit={null}
      ></SetupPageBuilder>
    </OrangeBackground>
  );
};

export default AccountSetupPage;
