import { Route, Switch } from "react-router-dom";
import Settings from "./pages/Settings/Settings";
import Tasks from "./pages/TasksAll/Tasks/Tasks";
import TasksEmpty from "./pages/TasksAll/TasksEmpty/TasksEmpty";
import Wallet from "./pages/WalletsAll/Wallets/Wallet";
import WalletEmpty from "./pages/WalletsAll/WalletsEmpty/WalletsEmpty";
import ManageTask from "./pages/ManageTask/ManageTask";
import Opensea from "./pages/Opensea";
import LatestMinting from "./pages/LatestMinting";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Wallet} />
      <Route path="/tasks" exact component={Tasks} />
      <Route path="/tasks-empty" exact component={TasksEmpty} />
      <Route path="/manage-task" exact component={ManageTask} />
      <Route path="/wallet" exact component={Wallet} />
      <Route path="/wallet-empty" exact component={WalletEmpty} />
      <Route path="/opensea" exact component={Opensea} />
      <Route path="/minting" exact component={LatestMinting} />
      <Route path="/settings" exact component={Settings} />
    </Switch>
  );
};

export default App;
