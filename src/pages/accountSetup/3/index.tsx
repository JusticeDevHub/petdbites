import { useContext } from "react";
import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import SetupPageBuilder from "../../../components/SetupPageBuilder";
import { userDataContext } from "../../../hooks/userDataContext";

const AccountSetupPage = () => {
  const context = useContext(userDataContext);

  return (
    <OrangeBackground>
      <SetupPageBuilder
        title={"Is your dog a he or she ?"}
        description={""}
        inputFields={[]}
        multipleChoice={["He", "She"]}
        pageRouteTo={"/accountSetup/4"}
        onSubmit={(formProps) => {
          const gender = Object.keys(formProps)[0] || "";
          context.setGender(gender);
        }}
      ></SetupPageBuilder>
    </OrangeBackground>
  );
};

export default AccountSetupPage;
