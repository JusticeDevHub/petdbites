import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import SetupPageBuilder from "../../../components/SetupPageBuilder";

const AccountSetupPage = () => {
  return (
    <OrangeBackground>
      <SetupPageBuilder
        title={"Does your dog have any dietary restrictions or preferences?"}
        description={""}
        inputFields={[
          {
            type: "text",
            fieldName: "DietaryRestrictions",
            placeholder:
              "Enter your dog's dietary restrictions or preferences here",
          },
        ]}
        multipleChoice={[]}
        pageRouteTo={"/accountSetup/6"}
        onSubmit={null}
      ></SetupPageBuilder>
    </OrangeBackground>
  );
};

export default AccountSetupPage;
