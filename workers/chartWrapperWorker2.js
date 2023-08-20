// import * as bm from "../components/content/charts/barrelModule";
// import ImportScriptTest from "./importScriptTest";

// eslint-disable-next-line import/no-anonymous-default-export
// export default () => {
const topGlobaObj = {
  testProp: "testProp",
};

/* eslint-disable-next-line no-restricted-globals */
self.onmessage = (evnt) => {
  // const dispatch = bm.useAppDispatch();
  const data = JSON.parse(evnt.data);
  console.log("data: ", data);
  switch (data.message) {
    case "test": {
      console.info(
        "%cchartWrapperWorker::data.payload: ",
        "color: palegreen",
        data.payload
      );
      console.info(
        "%cchartWrapperWorker::topGlobaObj.testProp_before: ",
        "color: palegreen",
        topGlobaObj.testProp
      );
// console.info(
// "%cchartWrapperWorker::ImportScriptTest: ",
// "color: coral",
// ImportScriptTest
// );
      // const code = ImportScriptTest.toString();
      // const blob = new Blob([`(${code})()`]);
      // console.log(
      // "%cworkers/chartWrapperWorker::blob: ",
      // "color: yellow",
      // blob
      // );
      // importScripts(URL.createObjectURL(blob));
      // importScripts("./importScriptTest.ts");
      console.info(
        "%cchartWrapperWorker::topGlobaObj.testProp_after: ",
        "color: palegreen",
        topGlobaObj.testProp
      );
      break;
    }

    default: {
      console.info("%cchartWrapperWorker::PROBLEM: ", "color: red");
      break;
    }
  }
};
// };
export {};
