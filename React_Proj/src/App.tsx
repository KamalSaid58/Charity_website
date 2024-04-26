import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
function App() {
  let items = ["Kamal", "Said", "Kamal"];
  //Passing parameters to components

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <ListGroup
        names={items}
        heading="Names"
        onSelectItem={handleSelectItem}
      >
      </ListGroup>{" "} */}
      <Alert>Shut the fuck up.Try again</Alert>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Press ME
      </Button>
    </div>
  );
}
export default App;
