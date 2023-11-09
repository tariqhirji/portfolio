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
          className="block mb-2 text-sm text-gray-600 pl-2"
        >
          {label}
        </label>
        {type === "text" || type === "email" ? (
          <input
            type={type}
            id="contactName"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default FormInput;
