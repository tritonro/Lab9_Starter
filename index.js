function breakPage() {
  const operatorMenu = document.getElementById("operator");
  operatorMenu.innerHTML = "";
}
function fixPage() {
  const operatorMenu = document.getElementById("operator");
  operatorMenu.innerHTML = `
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    `;
}
function init() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let output = document.querySelector("output");
    let firstNum = document.querySelector("#first-num").value;
    let secondNum = document.querySelector("#second-num").value;
    try {
      let operator = document.querySelector("#operator").value;
      console.assert(operator !== "");
    } catch (err) {
      fixPage();
    } finally {
      output.innerHTML = eval(`${firstNum}
        ${operator}
        ${secondNum}`);
    }
  });

  let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

  // Start your code here
  const log_btn = document.getElementById("log");
  const error_btn = document.getElementById("err");
  const count_btn = document.getElementById("count");
  const warn_btn = document.getElementById("warn");
  const assert_btn = document.getElementById("assert");
  const clear_btn = document.getElementById("clear");
  const dir_btn = document.getElementById("dir");
  const dirxml_btn = document.getElementById("dirxml");
  const group_start_btn = document.getElementById("group-start");
  const group_end_btn = document.getElementById("group-end");
  const table_btn = document.getElementById("table");
  const time_start_btn = document.getElementById("timer-start");
  const time_end_btn = document.getElementById("timer-end");
  const trace_btn = document.getElementById("trace");
  const global_err_btn = document.getElementById("global-err");
  const evil_btn = document.getElementById("evil");

  error_btn.addEventListener("click", (e) => {
    console.error(`This is an error message`);
  });

  log_btn.addEventListener("click", () => {
    console.log("This is a log message");
  });
  count_btn.addEventListener("click", () => {
    console.count("Count button clicked");
  });
  warn_btn.addEventListener("click", () => {
    console.warn("This is a warning message");
  });
  assert_btn.addEventListener("click", () => {
    console.assert(false, "Assertion failed!");
  });
  clear_btn.addEventListener("click", () => {
    console.clear();
  });
  dir_btn.addEventListener("click", () => {
    console.dir(document.body);
  });
  dirxml_btn.addEventListener("click", () => {
    console.dirxml(document.body);
  });
  group_start_btn.addEventListener("click", () => {
    console.group("Group started");
  });
  group_end_btn.addEventListener("click", () => {
    console.groupEnd();
  });
  table_btn.addEventListener("click", () => {
    console.table([
      { a: 1, b: 2 },
      { a: 3, b: 4 },
    ]);
  });
  time_start_btn.addEventListener("click", () => {
    console.time("Timer");
  });
  time_end_btn.addEventListener("click", () => {
    console.timeEnd("Timer");
  });
  trace_btn.addEventListener("click", () => {
    console.trace("Trace button clicked");
  });
  global_err_btn.addEventListener("click", () => {
    //  throw new Error("Global error triggered")
  });

  evil_btn.addEventListener("click", breakPage);
}

init();
