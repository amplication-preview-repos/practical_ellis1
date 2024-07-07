import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VectorsList } from "./vectors/VectorsList";
import { VectorsCreate } from "./vectors/VectorsCreate";
import { VectorsEdit } from "./vectors/VectorsEdit";
import { VectorsShow } from "./vectors/VectorsShow";
import { DocumentsList } from "./documents/DocumentsList";
import { DocumentsCreate } from "./documents/DocumentsCreate";
import { DocumentsEdit } from "./documents/DocumentsEdit";
import { DocumentsShow } from "./documents/DocumentsShow";
import { QueriesList } from "./queries/QueriesList";
import { QueriesCreate } from "./queries/QueriesCreate";
import { QueriesEdit } from "./queries/QueriesEdit";
import { QueriesShow } from "./queries/QueriesShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"YandexGPTBotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vectors"
          list={VectorsList}
          edit={VectorsEdit}
          create={VectorsCreate}
          show={VectorsShow}
        />
        <Resource
          name="Documents"
          list={DocumentsList}
          edit={DocumentsEdit}
          create={DocumentsCreate}
          show={DocumentsShow}
        />
        <Resource
          name="Queries"
          list={QueriesList}
          edit={QueriesEdit}
          create={QueriesCreate}
          show={QueriesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
