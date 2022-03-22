import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
function MyForm({onSubmit}) {
  return (
<Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="login">
            Login
          </Label>
          <Input
            name="login"
            placeholder="login"
            type="login"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">
            Password
          </Label>
          <Input
            name="password"
            placeholder="password"
            type="password"
          />
        </FormGroup>
        <Button>
          Submit
        </Button>
      </Form>
  );
}

export default MyForm;
