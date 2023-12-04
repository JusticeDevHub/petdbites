import { useContext } from "react";
import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import SetupPageBuilder from "../../../components/SetupPageBuilder";
import { userDataContext } from "../../../hooks/userDataContext";

const AccountSetupPage = () => {
  const context = useContext(userDataContext);

  return (
    <OrangeBackground>
      <SetupPageBuilder
        title={"What breed is your dog?"}
        description={""}
        inputFields={[]}
        multipleChoice={[
          "Labrador Retriever",
          "German Shepherd",
          "Golden Retriever",
          "French Bulldog",
          "Bulldog",
          "Poodle",
          "Beagle",
          "Rottweiler",
          "Yorkshire Terrier",
          "Boxer",
          "Other",
        ]}
        pageRouteTo={"/accountSetup/5"}
        onSubmit={(formProps) => {
          const breed = Object.keys(formProps)[0] || "";
          context.setBreed(breed);
        }}
      ></SetupPageBuilder>
    </OrangeBackground>
  );
};

export default AccountSetupPage;
