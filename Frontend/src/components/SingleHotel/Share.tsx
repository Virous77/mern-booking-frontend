import React from "react";
import Button from "../common/Button";
import { AiOutlineClose } from "react-icons/ai";

type ShareProps = {
  close: () => void;
};

const Share: React.FC<ShareProps> = ({ close }) => {
  return (
    <div>
      <header>
        <h3>Share</h3>
        <Button
          buttonName={<AiOutlineClose color={`var(--main-font-color)`} />}
          onClick={close}
        />
      </header>
    </div>
  );
};

export default Share;
