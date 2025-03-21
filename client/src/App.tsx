import { Toaster } from "@/components/ui/toaster";
import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/hooks/use-theme";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
