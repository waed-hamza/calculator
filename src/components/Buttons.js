import { useEffect, useState } from "react";
import "./Buttons.css";

const Buttons = (props) => {
  const buttons = [
    {
      id: "clear",
      text: "AC",
    },
    {
      id: "divide",
      text: "/",
    },
    {
      id: "multiply",
      text: "X",
    },
    {
      id: "seven",
      text: "7",
    },
    {
      id: "eight",
      text: "8",
    },
    {
      id: "nine",
      text: "9",
    },
    {
      id: "subtract",
      text: "-",
    },
    {
      id: "four",
      text: "4",
    },
    {
      id: "five",
      text: "5",
    },
    {
      id: "six",
      text: "6",
    },
    {
      id: "add",
      text: "+",
    },
    {
      id: "one",
      text: "1",
    },
    {
      id: "two",
      text: "2",
    },
    {
      id: "three",
      text: "3",
    },
    {
      id: "equals",
      text: "=",
    },
    {
      id: "zero",
      text: "0",
    },
    {
      id: "decimal",
      text: ".",
    },
  ];
  const [currentNumber, setCurrentNumber] = useState("0");
  const [formulaArr, setFormulaArr] = useState([]);
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    if (e.target.value === "AC") {
      handleClear(e);
    } else if (
      e.target.value === "/" ||
      e.target.value === "X" ||
      e.target.value === "-" ||
      e.target.value === "+"
    ) {
      handleOperator(e);
    } else if (e.target.value === "=") {
      handleEquals(e);
    } else if (e.target.value === ".") {
      handleDecimal(e);
    } else {
      handleNumber(e);
    }
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setFormulaArr([]);
    setResult(0);
  };

  const handleOperator = (e) => {
    const regOp = /[*/+-]/;
    let form;
    let currentNum;

    if (result) {
      form = [formulaArr[formulaArr.length - 1]];
    } else {
      form = [...formulaArr];
      currentNum = currentNumber;

      if (currentNum !== "0" && !regOp.test(currentNum)) {
        form.push(currentNum);
      }
    }

    if (regOp.test(form[form.length - 1]) && e.target.value !== "-") {
      if (e.target.value === "X") {
        form[form.length - 1] = "*";
        currentNum = "*";
      } else {
        form[form.length - 1] = e.target.value;
        currentNum = e.target.value;
      }
    } else if (form[form.length - 1] === "-" && e.target.value === "-") {
      return;
    } else {
      if (e.target.value === "X") {
        form.push("*");
        currentNum = "*";
      } else {
        form.push(e.target.value);
        currentNum = e.target.value;
      }
    }

    setFormulaArr(form);
    setCurrentNumber(currentNum);
  };

  const handleEquals = () => {
    let form = [...formulaArr, currentNumber];
    let evaluation =
      Math.round(1000000000000 * eval(form.join(""))) / 1000000000000;

    setFormulaArr([...form, "=", evaluation]);
    setCurrentNumber(evaluation);
    setResult(evaluation);
  };

  const handleDecimal = () => {
    let reg = /[0-9]/;

    if (reg.test(currentNumber) && !currentNumber.includes(".")) {
      setCurrentNumber(currentNumber + ".");
    } else {
      setCurrentNumber("0.");
    }
  };

  const handleNumber = (e) => {
    const reg = /[0-9.]/;

    if (e.target.value === "0" && currentNumber === "0") {
      return;
    } else if (
      (e.target.value !== "0" && currentNumber === "0") ||
      !reg.test(currentNumber)
    ) {
      setCurrentNumber(e.target.value);
    } else {
      setCurrentNumber(currentNumber + e.target.value);
    }
  };

  useEffect(() => {
    props.onClick(currentNumber, formulaArr);
  }, [currentNumber, formulaArr]);

  return (
    <div id="buttons-container">
      {buttons.map((el, idx) => {
        return (
          <button
            key={idx}
            id={el.id}
            value={el.text}
            className="btns"
            onClick={handleClick}
          >
            {el.text}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
