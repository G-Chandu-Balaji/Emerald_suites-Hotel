function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-3 items-center gap-4 ">
      {/* Column 1: Label */}
      <label
        htmlFor={children.props.id}
        className="text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      {/* Column 2: Input */}
      <div>{children}</div>

      {/* Column 3: Error */}
      <div>{error && <p className="text-sm text-red-500">{error}</p>}</div>
    </div>
  );
}

export default FormRow;
