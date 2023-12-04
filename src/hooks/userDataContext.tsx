import { type ReactNode, createContext, useState } from "react";

type userDataType = {
  dogData: {
    FirstName: string;
    gender: string;
    breed: string;
    dietaryBehaviour: string;
  };
};

export const userDataContext = createContext<{
  userData: userDataType;
  setFirstName: (FirstName: string) => void;
  setGender: (gender: string) => void;
  setBreed: (breed: string) => void;
  setDietaryBehaviour: (dietaryBehaviour: string) => void;
}>({
  userData: {
    dogData: {
      FirstName: "",
      gender: "",
      breed: "",
      dietaryBehaviour: "",
    },
  },
  setFirstName: () => {
    console.log("");
  },
  setGender: () => {
    console.log("");
  },
  setBreed: () => {
    console.log("");
  },
  setDietaryBehaviour: () => {
    console.log("");
  },
});

const UserDataProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<userDataType>({
    dogData: {
      FirstName: "",
      gender: "",
      breed: "",
      dietaryBehaviour: "",
    },
  });

  const setFirstName = (FirstName: string) => {
    setUserData({
      ...userData,
      dogData: {
        ...userData.dogData,
        FirstName,
      },
    });
  };

  const setGender = (gender: string) => {
    setUserData({
      ...userData,
      dogData: {
        ...userData.dogData,
        gender,
      },
    });
  };

  const setBreed = (breed: string) => {
    setUserData({
      ...userData,
      dogData: {
        ...userData.dogData,
        breed,
      },
    });
  };

  const setDietaryBehaviour = (dietaryBehaviour: string) => {
    setUserData({
      ...userData,
      dogData: {
        ...userData.dogData,
        dietaryBehaviour,
      },
    });
  };

  return (
    <userDataContext.Provider
      value={{
        userData,
        setFirstName,
        setGender,
        setBreed,
        setDietaryBehaviour,
      }}
    >
      {children}
    </userDataContext.Provider>
  );
};

export default UserDataProvider;
