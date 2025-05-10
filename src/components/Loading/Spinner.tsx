import { ReactElement } from "react";

type SpinnerProps = {
  className: string;
};

const Spinner = ({ className }: SpinnerProps): ReactElement => (
  <div className={className} role="status">
    <span className="sr-only">Loading</span>
  </div>
);

export default Spinner;
