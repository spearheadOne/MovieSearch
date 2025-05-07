interface PlotProps {
  value: string;
  onChange: (value: string) => void;
}

function Plot({ value, onChange }: PlotProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="plot" className="text-sm text-gray-600">
        Plot
      </label>
      <select
        id="plot"
        name="plot"
        className="input input-bordered w-full rounded-md border-gray-300 px-4 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="short">Short</option>
        <option value="full">Full</option>
      </select>
    </div>
  );
}

export default Plot;
