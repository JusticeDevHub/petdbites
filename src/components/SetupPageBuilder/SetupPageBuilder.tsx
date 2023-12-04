import { useRouter } from "next/router";
import Title from "../text/Title";
import { type FormEvent, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { type pageDataSchema } from ".";

export const SetupPageBuilder = (data: pageDataSchema) => {
  const [multipleChoiceValue, setMultipleChoiceValue] = useState<boolean[]>([]);

  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const formProps = Object.fromEntries(formData);

    if (data.multipleChoice.length > 0) {
      if (multipleChoiceValue.toString() === "") {
        return;
      } else {
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const formProps = Object.fromEntries(formData);

        if (data.onSubmit !== null) {
          const key = Object.keys(formProps)[0] || "";
          data.onSubmit({ [key]: key });
        }
      }
    } else {
      if (data.onSubmit !== null) {
        data.onSubmit(formProps);
      }
    }

    router.push(data.pageRouteTo);
  };

  const multipleChoiceSelected = (index: number) => {
    const newMultipleChoiceValue = [];
    for (let i = 0; i < data.multipleChoice.length; i++) {
      newMultipleChoiceValue.push(false);
    }
    newMultipleChoiceValue[index] = true;
    setMultipleChoiceValue(newMultipleChoiceValue);
  };

  return (
    <div>
      <Title text={data.title}></Title>
      <p className="mb-12 mt-2 font-thin">{data.description}</p>

      <form onSubmit={onSubmit}>
        {data.inputFields.map((inputField, i) => {
          return (
            <input
              key={i}
              className="mb-3 w-full rounded-lg p-3"
              type={inputField.type}
              name={inputField.fieldName}
              placeholder={inputField.placeholder}
              required
            />
          );
        })}

        {data.multipleChoice.map((choice, i) => {
          return (
            <div key={i} className="flex items-center">
              <div className="mb-1 mr-2 h-7 w-7">
                <input
                  name={choice}
                  type="checkbox"
                  className="h-full w-full"
                  checked={multipleChoiceValue[i]}
                  style={{ marginTop: 2 }}
                  onChange={() => {
                    multipleChoiceSelected(i);
                  }}
                />
              </div>

              <p className="text-2xl">{choice}</p>
            </div>
          );
        })}

        <div className="flex justify-end">
          <motion.div
            initial={{ transform: "translateY(50px)" }}
            whileInView={{ transform: "translateY(0px)" }}
          >
            <button className="mt-12 flex items-center text-xl">
              {`Continue`} <IoIosArrowRoundForward className="mt-1 text-3xl" />
            </button>
          </motion.div>
        </div>
      </form>
    </div>
  );
};
