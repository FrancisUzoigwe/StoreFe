import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient();
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <RouterProvider router={mainRoute} />
        </QueryClientProvider>
      </Provider>
    </div>
  );
};

export default App;
