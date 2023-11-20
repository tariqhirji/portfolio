interface FormInputProps {
  type: "text" | "email" | "textarea";
  label: string;
  placeholder: string;
  value: string;
  setValue: (newValue: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  label,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="contactName"
          className="block mb-2 text-sm text-gray dark:text-secondary pl-2"
        >
          {label}
        </label>
        {type === "text" || type === "email" ? (
          <input
            type={type}
            id="contactName"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-gray50 border dark:bg-slate border-gray300 dark:border-writing text-gray dark:text-secondary text-sm rounded-lg focus:border-2 focus:ring-blue focus:border-blue dark:focus:ring-blue dark:focus:border-blue outline-none block w-full p-2.5 "
            placeholder={placeholder}
            required
          />
        ) : (
          <textarea
            id="message"
            rows={4}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            className=" resize-none bg-gray50 border dark:bg-slate border-gray300 dark:border-writing text-gray dark:text-secondary text-sm rounded-lg focus:ring-blue focus:border-blue dark:focus:ring-blue dark:focus:border-blue focus:border-2 outline-none block w-full p-2.5"
            placeholder={placeholder}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default FormInput;
