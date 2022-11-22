import React, { useEffect } from "react";

function Inputs({
  inputsValue,
  setInputsValue,
  setIsShowResult,
  isShowResult,
}) {
  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;

    setInputsValue({ ...inputsValue, [name]: value });
  };

  // const handleClickedButton = () => {
  //   if (inputsValue.fullname.trim().length && inputsValue.email.trim().length) {
  //     setIsShowResult(false);
  //   }
  // };

  function postData() {
    setIsShowResult(!isShowResult);
  }

  const tst = (tst) => {
    console.log(tst);
  };

  React.useEffect(() => {
    console.log("Will be fetch api data");
  }, []);

  React.useEffect(() => {
    if (!isShowResult) {
      console.log("Posted");
    }

    console.log(inputsValue);
  }, [isShowResult, inputsValue]);

  React.useEffect(() => {
    tst(isShowResult);
  }, [isShowResult]);

  return (
    <>
      <label htmlFor="fullname">Fullname</label>
      <input
        id="fullname"
        placeholder="Write fullname"
        defaultValue={inputsValue.fullname}
        name="fullname"
        onChange={handleChangeInputValue}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Write email"
        defaultValue={inputsValue.email}
        name="email"
        onChange={handleChangeInputValue}
      />
      <button onClick={postData}>Add input</button>
    </>
  );
}

export default Inputs;
