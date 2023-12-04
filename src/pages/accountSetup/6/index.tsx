import { useContext } from "react";
import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import SetupPageBuilder from "../../../components/SetupPageBuilder";
import { userDataContext } from "../../../hooks/userDataContext";

const AccountSetupPage = () => {
  const context = useContext(userDataContext);

  return (
    <OrangeBackground>
      <SetupPageBuilder
        title={"Tell us your dog's dietary behavior"}
        description={""}
        inputFields={[]}
        multipleChoice={[
          "Normal",
          "Food Allergies",
          "Grain-Free Diet",
          "Low-Fat Diet",
          "High-Protein Diet",
          "Vegetarian or Vegan Diet",
          "Picky Eater",
          "Eats Anything",
          "Requires Prescription Diet",
          "Homemade Diet",
        ]}
        pageRouteTo={"/accountSetup/complete"}
        onSubmit={(formProps) => {
          const dietary = Object.keys(formProps)[0] || "";
          context.setDietaryBehaviour(dietary);
        }}
      ></SetupPageBuilder>
    </OrangeBackground>
  );
};

export default AccountSetupPage;
